import React from 'react';
import Box from 'components/Box';
import { Term, TermData } from 'modules/terms';
import { useCollectionData } from 'modules/data';
<<<<<<< HEAD
import userDataList from 'mocks/userDataList';
import RoleView from 'components/views/RoleView';
import { TERMS } from 'utils/collectionNames';
=======
import { userDataList } from 'mocks/userDataList';
>>>>>>> votes page WIP | created mock list of users

const RolesList = () => {
  const { data } = useCollectionData<Term, TermData>(TERMS);
  const currentTerm = data[data.length - 1];
  return (
    <Box style={{ margin: 20 }}>
      <h1>List of Roles</h1>
      <ul>
        {currentTerm &&
          currentTerm.roles &&
          currentTerm.roles.map(role => (
            <li key={role.id}>
              <RoleView
                users={userDataList}
                role={role}
                isNominationsOpen={currentTerm.isNominationsOpen}
                isVotingOpen={currentTerm.isVotingOpen}
              ></RoleView>
            </li>
          ))}
      </ul>
    </Box>
  );
};

export default RolesList;
