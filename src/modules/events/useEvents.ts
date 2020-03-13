import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Event, EventData } from './types';

const EVENTS_COLLECTION_NAME = 'events';

const useEvents = () => {
  const eventsRef = useFirestore().collection(EVENTS_COLLECTION_NAME);
  const events = useFirestoreCollectionData<Event>(eventsRef, {
    idField: 'id',
  });
  const addEvent = async (eventData: EventData) => {
    const creationDate = new Date();
    return await eventsRef.add({ ...eventData, creationDate });
  };
  const removeEvent = async (id: string) => {
    return await eventsRef.doc(id).delete();
  };
  return { events, addEvent, removeEvent };
};

export default useEvents;
