import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Box from 'components/Box';
import Submission from 'components/Submission';
import Button from 'components/buttons/Button';
import UnstyledLink from 'components/buttons/UnstyledLink';
import SubmissionForm from 'components/forms/SubmissionForm';
import Centered from 'components/utils/Centered';
import { useUser } from 'modules/users';
import useSubmissions, {
  SubmissionUserData,
  Submission as SubmissionType,
} from 'modules/submissions';
import { VotingSubmitPositionParams } from './types';

const VotingSubmitPosition = () => {
  const { user, isSignUpComplete } = useUser();
  const { position } = useParams<VotingSubmitPositionParams>();

  const {
    findSubmission,
    addSubmission,
    deleteSubmission,
    setSubmission,
  } = useSubmissions();

  const submission = findSubmission(user.id, position);

  const [isEditing, setIsEditing] = useState(false);
  const [submissionDeleted, setSubmissionDeleted] = useState(false);

  const onDeleteClicked = async () => {
    if (!submission) {
      throw new Error('Tried to delete submission that does not exist.');
    }
    await deleteSubmission(submission.id);
    setSubmissionDeleted(true);
  };

  const addOrUpdateSubmission = async (
    submissionUserData: SubmissionUserData,
  ) => {
    if (submission?.id) {
      await setSubmission(submission.id, submissionUserData);
    } else {
      await addSubmission(submissionUserData);
    }
    setIsEditing(false);
  };

  const showSubmissionForm = !submissionDeleted && (!submission || isEditing);
  const showSubmissionPreview = !submissionDeleted && submission && !isEditing;

  if (!isSignUpComplete) {
    return <Redirect to="/voting" />;
  }

  return (
    <Box mt="S" p="M" m="0 auto" maxWidth={600}>
      <p>Hey {user.name}!</p>
      {showSubmissionForm && (
        <>
          <p>You&apos;re submitting to run for the position of {position}.</p>
          <SubmissionForm
            position={position}
            submit={addOrUpdateSubmission}
            initialName={submission?.fullName ?? user.name}
            initialVideoUrl={submission?.videoUrl}
            initialWriteUp={submission?.writeUp}
            initialImageUrl={submission?.photoUrl ?? user.photoURL}
          />
        </>
      )}
      {showSubmissionPreview && (
        <>
          <Box color="success">
            <p>
              Your submission to run for the position of {position} has been
              successfully recorded.
            </p>
          </Box>
          <p>Below is how your submission will look to members.</p>
          <Submission
            // showSubmissionPreview ensure this cast is okay
            submission={submission as SubmissionType}
            castVote={() => {
              console.log("You can't vote for from here.");
            }}
          />
          <Box mt="L" ml="M" display="flex">
            <Button variant="secondary" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
            <Button ml="S" variant="secondary" onClick={onDeleteClicked}>
              Delete
            </Button>
            <UnstyledLink ml="S" to="/voting">
              <Button>Done</Button>
            </UnstyledLink>
          </Box>
        </>
      )}
      {submissionDeleted && (
        <>
          <p>
            Your submission for the position of {position}, was successfully
            deleted.
          </p>
          <p>Feel free to resubmit or submit for another position.</p>
          <Centered>
            <UnstyledLink ml="S" to="/voting">
              <Button>Done</Button>
            </UnstyledLink>
          </Centered>
        </>
      )}
    </Box>
  );
};

export default VotingSubmitPosition;
