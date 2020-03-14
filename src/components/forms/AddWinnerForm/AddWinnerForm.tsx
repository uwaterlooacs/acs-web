import React, { useState } from 'react';
import Box from 'components/Box';

const AddWinnerForm = ({ setWinner }) => {
  const [id, setId] = useState('');
  const [term, setTerm] = useState('');
  return (
    <Box style={{ margin: 20 }}>
      <h1>Add Nominee</h1>
      <Box>
        <h3>Id</h3>
        <input value={id} onChange={e => setId(e.target.value)}></input>
        <h3>Term</h3>
        <input value={term} onChange={e => setTerm(e.target.value)}></input>
      </Box>
      <Box style={{ marginTop: 10 }}>
        <button onClick={() => setWinner({ id, votes })}>Create Event</button>
      </Box>
    </Box>
  );
};

export default AddWinnerForm;
