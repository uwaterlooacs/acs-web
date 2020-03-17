import React from 'react';
import Box from 'components/Box';
import { Role, RoleData } from 'modules/roles/types';
import { useCollectionData } from 'modules/data';
import userDataList from 'mocks/userDataList';
import RoleView from 'components/views/RoleView';
import { ROLES } from 'utils/collectionNames';

const RolesList = () => {
  const { data } = useCollectionData<Role, RoleData>(ROLES);
  return (
    <Box style={{ margin: 20 }}>
      <h1>List of Roles</h1>
      <ul>
        {data.map(role => (
          <li key={role.id}>
            <RoleView users={userDataList} role={role}></RoleView>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default RolesList;
