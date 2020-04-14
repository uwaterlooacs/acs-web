import React from 'react';
import Box from 'components/Box';
import { useUser } from 'modules/users';
import RoundedImg from 'components/utils/RoundedImg';

const DEFAULT_PROFILE_SRC = 'https://picsum.photos/50/50';

const Header = () => {
  const { user } = useUser();
  return (
    <Box
      margin="0 auto"
      maxWidth={600}
      height={64}
      pl="M"
      pr="M"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      <RoundedImg
        width={32}
        height={32}
        border="1px solid"
        borderColor="lightgrey"
        src={user.photoURL ?? DEFAULT_PROFILE_SRC}
        alt="Profile"
      />
    </Box>
  );
};

export default Header;
