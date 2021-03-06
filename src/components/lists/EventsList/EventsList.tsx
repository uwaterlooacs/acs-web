import React from 'react';
import Box from 'components/Box';
import { Event, EventData } from 'modules/events/types';
import { useCollectionData } from 'modules/data';
import { EVENTS } from 'utils/collectionNames';

const EventsList = () => {
  const { data, removeDoc } = useCollectionData<Event, EventData>(EVENTS);
  return (
    <Box style={{ margin: 20 }}>
      <h1>List of events</h1>
      <ul>
        {data.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <button onClick={() => removeDoc(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default EventsList;
