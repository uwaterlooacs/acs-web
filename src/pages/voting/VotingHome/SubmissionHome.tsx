import React from 'react';
import { Link } from 'react-router-dom';
import Octicon, { Check } from '@primer/octicons-react';
import Box from 'components/Box';
import SignIn from 'components/SignIn';
import Button from 'components/buttons/Button';
import UnstyledLink from 'components/buttons/UnstyledLink';
import Centered from 'components/utils/Centered';
import { useUser } from 'modules/users';
import useSubmissions from 'modules/submissions';
import { POSITIONS_OPTIONS } from '../constants';

const SubmissionHome = () => {
  const { user, isLoggedIn, isSignUpComplete } = useUser();
  const { getPositionsSubmittedFor } = useSubmissions();

  const positionsSubmittedFor = getPositionsSubmittedFor(user.id);
  const numPositionSubmittedFor = Object.keys(positionsSubmittedFor).length;

  return (
    <Box>
      <Box mt={2} p={3} m="0 auto" maxWidth={600}>
        {isLoggedIn && <p>Hey {user.name}!</p>}
        {numPositionSubmittedFor > 0 && (
          <Box color="success">
            <p>
              Looks like we&apos;ve recorded{' '}
              {numPositionSubmittedFor === 1 ? 'a' : 'multiple'} submission
              {numPositionSubmittedFor > 1 && 's'} for{' '}
              {numPositionSubmittedFor === 1 && 'a'} position
              {numPositionSubmittedFor > 1 && 's'} you&apos;re running for.
            </p>
            <p>
              Click the green submitted indicator to view, edit or delete your
              submission.
            </p>
          </Box>
        )}
        <p>
          We&apos;re currently accepting submission for the following positions:
        </p>
        <ul>
          {POSITIONS_OPTIONS.map(position => (
            <li key={position.value}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  {position.label}{' '}
                  <span role="img" aria-label={position.ariaLabel}>
                    {position.emoji}
                  </span>
                </Box>
                {positionsSubmittedFor[position.value] && (
                  <UnstyledLink to={`/voting/submission/${position.value}`}>
                    <Box color="success" fontSize="XS" mr="L">
                      <Octicon icon={Check} /> Submitted
                    </Box>
                  </UnstyledLink>
                )}
              </Box>
            </li>
          ))}
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
        <p>
          Checkout out our <Link to="/voting/faq">faq</Link> for more
          information.
        </p>
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

export default SubmissionHome;