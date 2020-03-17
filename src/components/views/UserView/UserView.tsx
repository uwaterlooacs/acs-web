import React from 'react';
import Box from 'components/Box';
import { User } from 'modules/users';

const UserView = (props: UserViewProps) => {
  const { user } = props;
  return (
    <Box style={{ display: 'flex', flexDirection: 'row', margin: 16 }}>
      <h2>{user.name}</h2>
    </Box>
  );
};

type UserViewProps = {
  user: User;
};

export default UserView;
