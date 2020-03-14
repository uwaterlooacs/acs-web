import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const useCollectionData = <T, D>(COLLECTION_NAME: string) => {
  const dataRef = useFirestore().collection(COLLECTION_NAME);
  const data = useFirestoreCollectionData<T>(dataRef, {
    idField: 'id',
  });
  const addData = async (d: D) => {
    const creationDate = new Date();
    return await dataRef.add({ ...d, creationDate });
  };
  const removeData = async (id: string) => {
    return await dataRef.doc(id).delete();
  };
  return { data, addData, removeData };
};

export default useData;
