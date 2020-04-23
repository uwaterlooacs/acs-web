import React from 'react';
import InApp from 'detect-inapp';
import Box from 'components/Box';
import Centered from 'components/utils/Centered';
import UnstyledLink from 'components/buttons/UnstyledLink';
import SignIn from 'components/SignIn';
import Button from 'components/buttons/Button';
import { useUser } from 'modules/users';
import { useVote } from 'modules/vote';
import Octicon, { Check } from '@primer/octicons-react';

const VotingHome = () => {
  const { vote } = useVote();
  const { user, isLoggedIn, isSignUpComplete } = useUser();

  const hasVoted = Object.keys(vote).length > 0;
  const inapp = new InApp(navigator.userAgent || navigator.vendor);
  const isInApp = inapp.isInApp;

  return (
    <Box>
      <Box mt={2} p={3} m="0 auto" maxWidth={600}>
        {isInApp && (
          <Box color="error">
            <p>
              We&apos;ve detected that you are in an app&apos;s built-in
              browser.
            </p>
            <p>
              Sign in with Google requires that you open your the website in a
              real browser. Sign in with Facebook or email will still work.
            </p>
            <p>
              You can click the menu button in the app header and select open in
              Chrome or Safari to open the website in a real browser.
            </p>
          </Box>
        )}
        {isLoggedIn && <p>Hey {user.name}!</p>}
        {hasVoted && (
          <Box color="success">
            <p>Your votes have been successfully recorded!</p>
            <p>You can recast your vote by clicking the vote button below.</p>
          </Box>
        )}
        <p>We&apos;re currently accepting votes for the following positions:</p>
        <ul>
          <li>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                President{' '}
                <span role="img" aria-label="crown">
                  👑
                </span>
              </Box>
              {vote['president'] && (
                <Box color="success" fontSize="XS" mr="L">
                  <Octicon icon={Check} /> Submitted
                </Box>
              )}
            </Box>
          </li>
          <li>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                Vice-President{' '}
                <span role="img" aria-label="sparkle">
                  ✨
                </span>
              </Box>
              {vote['vice-president'] && (
                <Box color="success" fontSize="XS" mr="L">
                  <Octicon icon={Check} /> Submitted
                </Box>
              )}
            </Box>
          </li>
          <li>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                Secretary{' '}
                <span role="img" aria-label="file cabinet">
                  🗄
                </span>
              </Box>
              {vote['secretary'] && (
                <Box color="success" fontSize="XS" mr="L">
                  <Octicon icon={Check} /> Submitted
                </Box>
              )}
            </Box>
          </li>
        </ul>
        {!isLoggedIn && <p>Sign up or sign in below to vote.</p>}
        {isLoggedIn && <p>Click the button below to vote.</p>}
      </Box>
      <Centered>
        <SignIn />
      </Centered>
      {isSignUpComplete && (
        <Centered>
          <UnstyledLink to="/voting/vote">
            <Button>Vote</Button>
          </UnstyledLink>
        </Centered>
      )}
    </Box>
  );
};

export default VotingHome;
