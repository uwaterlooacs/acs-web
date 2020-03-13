import React from 'react';
import Box from 'components/Box';
import { useEvents } from 'modules/events';

const EventsList = () => {
  const { events, removeEvent } = useEvents();
  return (
    <Box style={{ margin: 20 }}>
      <h1>List of events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <button onClick={() => removeEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default EventsList;
