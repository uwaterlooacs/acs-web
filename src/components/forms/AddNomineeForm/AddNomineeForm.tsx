import React, { useState } from 'react';
import Box from 'components/Box';
import { Event, EventData } from 'modules/events/types';
import { useCollectionData } from 'modules/data';

const AddNomineeForm = () => {
  const { addDoc } = useCollectionData<Event, EventData>('events');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const images: string[] = [];
  const attendees: string[] = [];
  const createEvent = () => {
    addDoc({
      title,
      description,
      start: new Date(start),
      end: new Date(end),
      images,
      attendees,
    });
  };
  return (
    <Box style={{ margin: 20 }}>
      <h1>Add role</h1>
      <Box>
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
      </Box>
      <Box style={{ marginTop: 10 }}>
        <button onClick={createEvent}>Create Event</button>
      </Box>
    </Box>
  );
};

export default AddNomineeForm;
