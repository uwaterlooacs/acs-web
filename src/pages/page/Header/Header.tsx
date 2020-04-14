import React from 'react';
import { useAuth } from 'reactfire';
import Box from 'components/Box';
import { useUser } from 'modules/users';
import RoundedImg from 'components/utils/RoundedImg';
import StyledTooltip from 'components/utils/StyledTooltip';
import UnstyledButton from 'components/buttons/UnstyledButton';

const DEFAULT_PROFILE_SRC = 'https://picsum.photos/50/50';

const Header = () => {
  const { user, isLoggedIn } = useUser();
  const auth = useAuth();

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
      {isLoggedIn && (
        <RoundedImg
          data-tip
          data-for="profile-pic"
          width={32}
          height={32}
          src={user.photoURL ?? DEFAULT_PROFILE_SRC}
          alt="Profile"
        />
      )}
      <StyledTooltip
        id="profile-pic"
        delayHide={1000}
        place="bottom"
        effect="solid"
        border
        variant="stayOnHover"
      >
        <UnstyledButton color="white" onClick={() => auth.signOut()}>
          Logout
        </UnstyledButton>
      </StyledTooltip>
    </Box>
  );
};

export default Header;
