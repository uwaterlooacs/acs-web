import React from 'react';
import Box from 'components/Box';
import Submission from 'components/Submission';
import Centered from 'components/utils/Centered';
import Button from 'components/buttons/Button';
import UnstyledLink from 'components/buttons/UnstyledLink';
import useSubmissions from 'modules/submissions';
import { useVote } from 'modules/vote';
import { POSITIONS_OPTIONS } from './constants';

const VotingSubmissionPosition = () => {
  const { submissions } = useSubmissions();
  const { vote, castVote } = useVote();

  const submissionGroups = POSITIONS_OPTIONS.map(option => ({
    position: option.value,
    label: option.label,
    submissions: submissions.filter(
      submission => submission.position === option.value,
    ),
  }));

  return (
    <Box mt="S" p="M" m="0 auto" maxWidth={600}>
      {submissionGroups.map(
        groupedSubmission =>
          groupedSubmission.submissions.length > 0 && (
            <Box mb="L" key={groupedSubmission.position}>
              <Box fontSize="L">{groupedSubmission.label}</Box>
              <p>
                Here are the candidates for the position of{' '}
                {groupedSubmission.position}.
              </p>
              {groupedSubmission.submissions.map(submission => (
                <Submission
                  key={submission.id}
                  submission={submission}
                  castVote={() =>
                    castVote(submission.position, submission.candidate)
                  }
                  votedFor={vote[submission.position] === submission.candidate}
                />
              ))}
              {vote[groupedSubmission.position] && (
                <Box color="success">
                  <p>
                    Your vote for {groupedSubmission.position} was successfully
                    cast!
                  </p>
                  <p>The candidate you have voted for is highlighted in red.</p>
                </Box>
              )}
            </Box>
          ),
      )}
      <Centered>
        <UnstyledLink ml="S" to="/voting">
          <Button>Done</Button>
        </UnstyledLink>
      </Centered>
    </Box>
  );
};

export default VotingSubmissionPosition;
