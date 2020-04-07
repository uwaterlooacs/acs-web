import { v4 as uuidv4 } from 'uuid';

export const processFile = (
  file: File,
  storage: firebase.storage.Storage,
  storagePath: string,
  { preUpload, postUpload }: Record<string, () => void>,
) =>
  new Promise<string>(done => {
    const reader = new FileReader();

    reader.onload = async () => {
      preUpload();
      const binaryStr = reader.result as ArrayBuffer;
      const ref = storage.ref(storagePath).child(uuidv4());
      const { ref: resultRef } = await ref.put(binaryStr);
      const downloadUrl = await resultRef.getDownloadURL();
      postUpload();
      done(downloadUrl);
    };

    reader.readAsArrayBuffer(file);
  });
