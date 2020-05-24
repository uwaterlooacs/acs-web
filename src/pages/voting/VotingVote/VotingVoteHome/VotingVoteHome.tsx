import React from 'react';
import Box from 'components/Box';
import Submission from 'components/Submission';
import Centered from 'components/utils/Centered';
import Button from 'components/buttons/Button';
import UnstyledLink from 'components/buttons/UnstyledLink';
import useSubmissions from 'modules/submissions';
import { useVote } from 'modules/vote';
import { POSITIONS_OPTIONS } from '../../constants';

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

  const castVoteWithMultiple = (position: string, candidate: string) => {
    if (position === 'social coordinator') {
      if (vote['social coordinator 1'] === undefined) {
        castVote('social coordinator 1', candidate);
      } else if (vote['social coordinator 2'] === undefined) {
        castVote('social coordinator 2', candidate);
      } else {
        castVote('social coordinator 2', vote['social coordinator 1']);
        castVote('social coordinator 1', candidate);
      }
    } else {
      castVote(position, candidate);
    }
  };

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
              {groupedSubmission.position === 'social coordinator' && (
                <p>
                  <strong>Please vote for two social coordinators.</strong>
                </p>
              )}
              {groupedSubmission.submissions.map(submission => {
                const votedFor =
                  submission.position === 'social coordinator'
                    ? vote['social coordinator 1'] === submission.candidate ||
                      vote['social coordinator 2'] === submission.candidate
                    : vote[submission.position] === submission.candidate;
                return (
                  <Submission
                    key={submission.id}
                    submission={submission}
                    castVote={() =>
                      castVoteWithMultiple(
                        submission.position,
                        submission.candidate,
                      )
                    }
                    votedFor={votedFor}
                  />
                );
              })}
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
