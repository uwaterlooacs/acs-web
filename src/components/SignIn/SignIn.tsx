import React, { useMemo } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useAuth } from 'reactfire';
import Box from 'components/Box';
import { createUIConfig } from './utils';
import { useUser } from 'modules/users';

const SignIn = () => {
  const auth = useAuth();
  const { isLoggedIn } = useUser();

  const uiConfig = useMemo(() => createUIConfig('/vote/completesignup'), []);

  return (
    <Box>
      {!isLoggedIn && (
        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfig} />
      )}
    </Box>
  );
};

export default SignIn;
