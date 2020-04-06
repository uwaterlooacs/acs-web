import React from 'react';
import { useAuth } from 'reactfire';
import Box from 'components/Box';
import SignIn from 'components/SignIn';
import Button from 'components/buttons/Button';
import Centered from 'components/utils/Centered';
import { useUser } from 'modules/users';

const VoteHome = () => {
  const auth = useAuth();
  const { isLoggedIn } = useUser();

  return (
    <Box>
      <Box mt={2} p={3} m="0 auto" maxWidth={600}>
        <p>
          We&apos;re currently accepting submission for the following positions:
        </p>
        <ul>
          <li>
            President{' '}
            <span role="img" aria-label="crown">
              👑
            </span>
          </li>
          <li>
            Vice-President{' '}
            <span role="img" aria-label="sparkle">
              ✨
            </span>
          </li>
          <li>
            Secretary{' '}
            <span role="img" aria-label="file cabinet">
              🗄
            </span>
          </li>
        </ul>
        <p>
          Sign up or sign in below to post your submission for any of these
          positions.
        </p>
      </Box>
      <Centered>
        <SignIn />
      </Centered>
      <Centered>
        <Button onClick={() => auth.signOut()} disabled={!isLoggedIn}>
          Sign out
        </Button>
      </Centered>
    </Box>
  );
};

export default VoteHome;
