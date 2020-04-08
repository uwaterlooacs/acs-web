import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Box from 'components/Box';
import { useUser } from 'modules/users';
import SubmissionForm from './SubmissionForm';
import { VotingSubmitPositionParams } from './types';

const VotingSubmitPosition = () => {
  const { user, isSignUpComplete } = useUser();
  const { position } = useParams<VotingSubmitPositionParams>();

  if (!isSignUpComplete) {
    return <Redirect to="/voting" />;
  }

  return (
    <Box mt={2} p={3} m="0 auto" maxWidth={600}>
      <p>Hey {user.name}!</p>
      <p>You&apos;re submitting to run for the position of {position}.</p>
      <SubmissionForm position={position} />
    </Box>
  );
};

export default VotingSubmitPosition;
