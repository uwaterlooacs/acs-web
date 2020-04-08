import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Box from 'components/Box';
import { useUser } from 'modules/users';
import useSubmissions from 'modules/submissions';
import SubmissionForm from './SubmissionForm';
import { VotingSubmitPositionParams } from './types';

const VotingSubmitPosition = () => {
  const { user, isSignUpComplete } = useUser();
  const { position } = useParams<VotingSubmitPositionParams>();

  const { findSubmission } = useSubmissions();

  const submission = findSubmission(user.id, position);

  if (!isSignUpComplete) {
    return <Redirect to="/voting" />;
  }

  return (
    <Box mt={2} p={3} m="0 auto" maxWidth={600}>
      <p>Hey {user.name}!</p>
      {!submission ? (
        <>
          <p>You&apos;re submitting to run for the position of {position}.</p>
          <SubmissionForm position={position} />
        </>
      ) : (
        <>
          <p>
            Your submission to run for the position of {position} has been
            successfully recorded.
          </p>
        </>
      )}
    </Box>
  );
};

export default VotingSubmitPosition;
