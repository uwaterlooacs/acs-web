import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Box from 'components/Box';
import Button from 'components/buttons/Button';
import Submission from 'components/Submission';
import SubmissionForm from 'components/forms/SubmissionForm';
import Centered from 'components/utils/Centered';
import { useUser } from 'modules/users';
import useSubmissions from 'modules/submissions';
import { VotingSubmitPositionParams } from './types';

const VotingSubmitPosition = () => {
  const { user, isSignUpComplete } = useUser();
  const { position } = useParams<VotingSubmitPositionParams>();

  const { findSubmission, addSubmission, deleteSubmission } = useSubmissions();

  const submission = findSubmission(user.id, position);

  if (!isSignUpComplete) {
    return <Redirect to="/voting" />;
  }

  return (
    <Box mt="S" p="M" m="0 auto" maxWidth={600}>
      <p>Hey {user.name}!</p>
      {!submission ? (
        <>
          <p>You&apos;re submitting to run for the position of {position}.</p>
          <SubmissionForm
            position={position}
            addSubmission={addSubmission}
            initialName={user.name}
          />
        </>
      ) : (
        <>
          <p>
            Your submission to run for the position of {position} has been
            successfully recorded.
          </p>
          <p>Below is how your submission will look to members.</p>
          <Submission
            submission={submission}
            castVote={() => {
              console.log("You can't vote for from here.");
            }}
          />
          <Centered mt="L">
            <Button onClick={() => deleteSubmission(submission.id)}>
              Delete
            </Button>
          </Centered>
        </>
      )}
    </Box>
  );
};

export default VotingSubmitPosition;
