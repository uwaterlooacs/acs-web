import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const useCollectionData = <T, D>(COLLECTION_NAME: string) => {
  const dataRef = useFirestore().collection(COLLECTION_NAME);
  const data = useFirestoreCollectionData<T>(dataRef, {
    idField: 'id',
  });
  const addDoc = async (d: D) => {
    const creationDate = new Date();
    return await dataRef.add({ ...d, creationDate });
  };
  const removeDoc = async (id: string) => {
    return await dataRef.doc(id).delete();
  };
  return { data, addDoc, removeDoc };
};

export default useCollectionData;
