import React from 'react';
import Box from 'components/Box';
import { Label } from 'components/utils/input';
import Button from 'components/buttons/Button';
import Centered from 'components/utils/Centered';
import RoundedImg from 'components/utils/RoundedImg';
import { Submission as SubmissionType } from 'modules/submissions';
import { SubmissionContainer } from './elements';

export type SubmissionProps = {
  submission: SubmissionType;
  castVote: () => Promise<void> | void;
  votedFor?: boolean;
};
const Submission: React.FC<SubmissionProps> = ({
  submission,
  castVote,
  votedFor = false,
}) => {
  const {
    fullName,
    photoUrl,
    videoUrl,
    writeUp,
    createdOn,
    modifiedOn,
  } = submission;

  return (
    <SubmissionContainer votedFor={votedFor}>
      <Box
        fontSize="XL"
        textAlign="center"
        display="flex"
        justifyContent={photoUrl ? 'space-between' : 'center'}
        alignItems="center"
      >
        {photoUrl && (
          <RoundedImg width={24} height={24} src={photoUrl} alt="Profile" />
        )}
        <Box>{fullName}</Box>
        {photoUrl && <Box width={24}>&nbsp;</Box>}
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
        {
          <Button onClick={castVote} disabled={votedFor}>
            Vote{votedFor && ' cast'} for {fullName}
          </Button>
        }
      </Centered>
      <Box mt="L" display="flex" fontSize="XXS">
        <Box flex={1}>
          <Label>Submitted on</Label>
          <Box m="XS">
            <p>{createdOn.toDate().toDateString()}</p>
          </Box>
        </Box>
        <Box flex={1}>
          <Label>Last modified on</Label>
          <Box m="XS">
            <p>{modifiedOn.toDate().toDateString()}</p>
          </Box>
        </Box>
      </Box>
    </SubmissionContainer>
  );
};

export default Submission;
