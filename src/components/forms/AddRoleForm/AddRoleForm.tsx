import React, { useState } from 'react';
import Box from 'components/Box';
import AddNomineeForm from 'components/forms/AddNomineeForm';
import AddWinnerForm from 'components/forms/AddWinnerForm';
import { Role, RoleData } from 'modules/events/types';
import { useCollectionData } from 'modules/data';

const AddRoleForm = () => {
  const { addDoc } = useCollectionData<Role, RoleData>('events');
  const [title, setTitle] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [nominees, setNominees] = useState([]);
  const [winners, setWinners] = useState([]);
  return (
    <Box style={{ margin: 20 }}>
      <h1>Add role</h1>
      <Box>
        <h3>Title</h3>
        <input value={title} onChange={e => setTitle(e.target.value)}></input>
        <h3>isOpen</h3>
        <p>{isOpen}</p>
        <Box style={{ flexDirection: 'row' }}>
          <button onClick={() => setIsOpen(true)}>Open</button>
          <button onClick={() => setIsOpen(false)}>Closed</button>
        </Box>
        <AddNomineeForm setNominees={setNominees}></AddNomineeForm>
        <AddWinnerForm setWinners={setWinners}></AddWinnerForm>
      </Box>
      <Box style={{ marginTop: 10 }}>
        <button
          onClick={() =>
            addDoc({
              isOpen,
              nominees,
              winners,
            })
          }
        >
          Create Event
        </button>
      </Box>
    </Box>
  );
};

export default AddRoleForm;
