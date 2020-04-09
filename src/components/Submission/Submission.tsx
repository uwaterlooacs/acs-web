import React from 'react';
import Box from 'components/Box';
import { Submission as SubmissionType } from 'modules/submissions';
import { Label } from 'components/utils/input';
import { SubmissionContainer } from './elements';
import Button from 'components/buttons/Button';
import Centered from 'components/utils/Centered';

export type SubmissionProps = {
  submission: SubmissionType;
  castVote: () => Promise<void>;
  votedFor?: boolean;
};
const Submission: React.FC<SubmissionProps> = ({
  submission,
  castVote,
  votedFor = false,
}) => {
  const { fullName, videoUrl, writeUp, createdOn, modifiedOn } = submission;

  return (
    <SubmissionContainer votedFor={votedFor}>
      <Box fontSize="XL" textAlign="center">
        {fullName}
      </Box>
      <Box mt="L">
        <Label>Video submission</Label>
        <Box m="XS" mt="M" mb="M">
          <video controls width="100%">
            <source src={videoUrl} />
            Sorry, your browser doesn&apos;t support embedded videos.
          </video>
        </Box>
      </Box>
      {writeUp && (
        <Box mt="L">
          <Label>Write up</Label>
          <Box m="XS">
            <p>{writeUp}</p>
          </Box>
        </Box>
      )}
      <Centered mt="L">
        {<Button onClick={castVote}>Vote for {fullName}</Button>}
      </Centered>
      <Box mt="L" display="flex" fontSize="XXS">
        <Box flex={1}>
          <Label>Submitted on</Label>
          <Box m="XS">
            <p>{createdOn.toDateString()}</p>
          </Box>
        </Box>
        <Box flex={1}>
          <Label>Last modified on</Label>
          <Box m="XS">
            <p>{modifiedOn.toDateString()}</p>
          </Box>
        </Box>
      </Box>
    </SubmissionContainer>
  );
};

export default Submission;
