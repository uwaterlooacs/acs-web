import { useFirestore, useFirestoreCollectionData } from 'reactfire';

type UseCollectionDataOptions<E> = {
  extraDocData?: Record<string, unknown>;
};
const useCollectionData = <T, D, E = {}>(
  COLLECTION_NAME: string,
  { extraDocData }: UseCollectionDataOptions<E> = {},
) => {
  const dataRef = useFirestore().collection(COLLECTION_NAME);
  const data = useFirestoreCollectionData<T>(dataRef, {
    idField: 'id',
  });
  const addDoc = async (d: D) => {
    const creationDate = new Date();
    return await dataRef.add({
      ...extraDocData,
      creationDate,
      ...d,
    });
  };
  const removeDoc = async (id: string) => {
    return await dataRef.doc(id).delete();
  };
  return { data, addDoc, removeDoc };
};

export default useCollectionData;
