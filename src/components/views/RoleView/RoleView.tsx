import React, { useState } from 'react';
import Box from 'components/Box';
import UserView from 'components/views/UserView';
import { Role } from 'modules/roles';
import { Term, TermData } from 'modules/terms';
import { User } from 'modules/users/types';
import { useCollectionData } from 'modules/data';
import { TERMS } from 'utils/collectionNames';

const RoleView = (props: RoleViewProps) => {
  const { role, users, isNominationsOpen, isVotingOpen } = props;
  const { removeDoc } = useCollectionData<Term, TermData>(TERMS);
  const [remainingUsers, setRemainingUsers] = useState(users);
  const nominate = (user: User) => {
    console.log(user);
  };
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
      {isNominationsOpen &&
        remainingUsers.map(user => (
          <li key={user.email}>
            <Box style={{ display: 'flex', flexDirection: 'row' }}>
              <UserView user={user}></UserView>
              <button onClick={() => nominate(user)}>Nominate</button>
            </Box>
          </li>
        ))}
      {isVotingOpen && (
        <Box>
          <Box></Box>
        </Box>
      )}
    </Box>
  );
};

type RoleViewProps = {
  role: Role;
  users: User[];
  isNominationsOpen: boolean;
  isVotingOpen: boolean;
};

export default RoleView;
