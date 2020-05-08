import { v4 as uuidv4 } from 'uuid';

export const processFile = async (
  file: File,
  storage: firebase.storage.Storage,
  storagePath: string,
  { preUpload, postUpload }: Record<string, () => void>,
) => {
  preUpload();
  const ref = storage.ref(storagePath).child(uuidv4());
  const { ref: resultRef } = await ref.put(file);
  const downloadUrl = await resultRef.getDownloadURL();
  postUpload();
  return downloadUrl;
};
