import React, { useState } from 'react';
import Box from 'components/Box';
import { Role, RoleData } from 'modules/roles/types';
import { useCollectionData } from 'modules/data';

const AddRoleForm = () => {
  const { addDoc } = useCollectionData<Role, RoleData>('roles');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(true);
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
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <h3>isOpen: </h3>
          <h3>{isOpen.toString()}</h3>
        </Box>
        <Box style={{ flexDirection: 'row' }}>
          <button onClick={() => setIsOpen(true)}>Open</button>
          <button onClick={() => setIsOpen(false)}>Closed</button>
        </Box>
      </Box>
      <Box style={{ marginTop: 10 }}>
        <button
          onClick={() =>
            addDoc({ title, description, isOpen, nominees: [], winners: [] })
          }
        >
          Create Role
        </button>
      </Box>
    </Box>
  );
};

export default AddRoleForm;
