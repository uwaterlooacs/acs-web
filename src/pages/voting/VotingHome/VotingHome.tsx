import React from 'react';
import { Redirect } from 'react-router-dom';
import Box from 'components/Box';
import SignIn from 'components/SignIn';
import Button from 'components/buttons/Button';
import UnstyledLink from 'components/buttons/UnstyledLink';
import Centered from 'components/utils/Centered';
import { useUser } from 'modules/users';

const VotingHome = () => {
  const { user, isLoggedIn, isSignUpComplete } = useUser();

  if (isLoggedIn && !isSignUpComplete) {
    return <Redirect to="/voting/completesignup" />;
  }

  return (
    <Box>
      <Box mt={2} p={3} m="0 auto" maxWidth={600}>
        {isLoggedIn && <p>Hey {user.name}!</p>}
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
        {!isLoggedIn && (
          <p>
            Sign up or sign in below to post your submission for any of these
            positions.
          </p>
        )}
        {isLoggedIn && (
          <>
            <p>
              If you are interested in running for one of these positions, click
              the link below to upload a short video clip or write-up on why you
              are a good fit for the position.
            </p>
            <p>
              When voting official opens, members will view your submission and
              cast their votes.
            </p>
          </>
        )}
      </Box>
      <Centered>
        <SignIn />
      </Centered>
      {isSignUpComplete && (
        <Centered>
          <UnstyledLink to="/voting/submission">
            <Button>Run for a position</Button>
          </UnstyledLink>
        </Centered>
      )}
    </Box>
  );
};

export default VotingHome;
