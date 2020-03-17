import React, { useState } from 'react';
import Box from 'components/Box';
import { Role, RoleData } from 'modules/roles/types';
import { UserData } from 'modules/users/types';
import { useCollectionData } from 'modules/data';
import { ROLES } from 'utils/collectionNames';

const RoleView = (props: RoleViewProps) => {
  const { role, users } = props;
  const { removeDoc } = useCollectionData<Role, RoleData>(ROLES);
  const [remainingUsers, setRemainingUsers] = useState([]);
  return (
    <Box>
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <Box style={{ margin: 20 }}>
          <h2>{role.title}</h2>
          <p>{role.description}</p>
        </Box>
        <button style={{ border: 'none' }} onClick={() => removeDoc(role.id)}>
          Delete
        </button>
      </Box>
      {/* {nominationsOpen && (
        <Box>
          <h3>Nominate someone:</h3>
          <input></input>
        </Box>
      )} */}
    </Box>
  );
};

type RoleViewProps = {
  role: Role;
  users: UserData[];
};

export default RoleView;
