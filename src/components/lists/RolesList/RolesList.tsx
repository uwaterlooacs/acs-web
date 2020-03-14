import React from 'react';
import Box from 'components/Box';
import { Role, RoleData } from 'modules/roles/types';
import { useCollectionData } from 'modules/data';

const RolesList = () => {
  const { data, removeDoc } = useCollectionData<Role, RoleData>('roles');
  return (
    <Box style={{ margin: 20 }}>
      <h1>List of Roles</h1>
      <ul>
        {data.map(role => (
          <li key={role.id}>
            <h2>{role.title}</h2>
            <p>{role.description}</p>
            <button onClick={() => removeDoc(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default RolesList;
