import React, { useState } from 'react';
import { useEvents } from 'modules/events';

const App = () => {
  const { events, addEvent, removeEvent } = useEvents();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const images: string[] = [];
  const attendees: string[] = [];
  const createEvent = () => {
    addEvent({
      title,
      description,
      start: new Date(start),
      end: new Date(end),
      images,
      attendees,
    });
  };
  return (
    <div style={{ margin: 20 }}>
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
      <h1>Add event</h1>
      <div>
        <h3>Title</h3>
        <input value={title} onChange={e => setTitle(e.target.value)}></input>
        <h3>Description</h3>
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></input>
        <h3>Start date</h3>
        <input value={start} onChange={e => setStart(e.target.value)}></input>
        <h3>End date</h3>
        <input value={end} onChange={e => setEnd(e.target.value)}></input>
      </div>
      <div style={{ marginTop: 10 }}>
        <button onClick={createEvent}>Create Event</button>
      </div>
    </div>
  );
};

export default App;
