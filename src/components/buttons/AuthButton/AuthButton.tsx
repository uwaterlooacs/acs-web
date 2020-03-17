import React, { useState, useMemo } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Box from 'components/Box';
import Button from 'components/buttons/Button';
import UnstyledButton from 'components/buttons/UnstyledButton';
import { useAuth, useUser } from 'reactfire';
import Overlay from 'components/utils/Overlay';
import Centered from 'components/utils/Centered';
import Divider from 'components/utils/Divider';
import UserSignUpForm from 'components/forms/UserSignUpForm';
import { createUIConfig } from './uiConfig';

const AuthButton: React.FC = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const auth = useAuth();
  const user = useUser<firebase.User>();

  const buttonText = !user ? 'Sign in' : 'Sign out';

  const onButtonClick = async () => {
    if (!user) {
      setOverlayVisible(true);
    } else {
      await auth.signOut();
    }
  };

  const uiConfig = useMemo(
    () =>
      createUIConfig(({ user }) => {
        console.log(user);
        return false;
      }),
    [],
  );

  return (
    <>
      <Button onClick={onButtonClick}>{buttonText}</Button>
      <Overlay visible={overlayVisible} setVisible={setOverlayVisible}>
        <Centered>
          {!user ? (
            <Box width={[1, 400]} p={3} textAlign="center">
              Sign in or create an account
              <Divider />
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
              <UnstyledButton onClick={() => setOverlayVisible(false)}>
                <em>Or continue as a guest</em>
              </UnstyledButton>
            </Box>
          ) : (
            <UserSignUpForm
              externalUserData={{
                email: user.email as string,
                name: user.displayName as string,
                photoURL: user.photoURL as string,
              }}
              onSignUp={() => setOverlayVisible(false)}
            />
          )}
        </Centered>
      </Overlay>
    </>
  );
};

export default AuthButton;
