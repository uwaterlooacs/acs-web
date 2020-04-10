import React, { useState } from 'react';
import Octicon, { Person, X } from '@primer/octicons-react';
import Box from 'components/Box';
import { Label, Input, Uploader, Textarea } from 'components/utils/input';
import UnstyledButton from 'components/buttons/UnstyledButton';
import Button from 'components/buttons/Button';
import Centered from 'components/utils/Centered';
import { SubmissionUserData } from 'modules/submissions';
import { VideoPreviewContainer } from './elements';

export type SubmissionFormProps = {
  position: string;
  submit: (newSubmissionData: SubmissionUserData) => Promise<void>;
  initialName?: string;
  initialVideoUrl?: string;
  initialWriteUp?: string;
};
const SubmissionForm: React.FC<SubmissionFormProps> = ({
  position,
  submit,
  initialName = '',
  initialVideoUrl = '',
  initialWriteUp = '',
}) => {
  const [fullName, setFullName] = useState(initialName);
  const [videoUrl, setVideoUrl] = useState(initialVideoUrl);
  const [writeUp, setWriteUp] = useState(initialWriteUp);

  const [tryedToSubmit, setTryedToSubmit] = useState(false);

  const showFullNameError = tryedToSubmit && !fullName;
  const showVideoUrlError = tryedToSubmit && !videoUrl;

  const onVideoUploaded = (downloadUrls: string[]) => {
    setVideoUrl(downloadUrls[0]);
  };

  const trySubmit = async () => {
    if (!videoUrl || !fullName) {
      setTryedToSubmit(true);
      return;
    }
    await submit({
      fullName,
      position,
      videoUrl,
      writeUp,
    });
  };
  return (
    <form>
      <Box mt={4}>
        <Label error={showFullNameError}>Full name</Label>
        <p>Please confirm or update your full name below.</p>
        <Box display="flex" alignItems="center">
          <Octicon icon={Person} />
          <Input
            ml="S"
            type="text"
            placeholder="yourquestid@uwaterloo.ca"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            error={showFullNameError}
          />
        </Box>
        {showFullNameError && (
          <Box color="error" fontSize="S" mb={3}>
            Please enter your full name.
          </Box>
        )}
      </Box>
      <Box mt={4}>
        <Label error={showFullNameError}>Video Submission</Label>
        {!videoUrl ? (
          <>
            <p>
              Upload a short video below explaining why you think you&apos;re a
              good fit for the position.
            </p>
            <p>
              When voting official opens, members will view your submission and
              cast their votes.
            </p>
            <Box height={200}>
              <Uploader
                error={showVideoUrlError}
                storagePath={`W20/voting/videosubmissions/${position}`}
                accept="video/*"
                onUploadComplete={onVideoUploaded}
                multiple={false}
              />
            </Box>
            {showVideoUrlError && (
              <Box color="error" fontSize="S" mb={3}>
                Please upload a video submission.
              </Box>
            )}
          </>
        ) : (
          <>
            <p>
              Video successfully uploaded! You can watch it below or click
              remove to upload a different video.
            </p>
            <Box display="flex" justifyContent="flex-end">
              <UnstyledButton display="inline" onClick={() => setVideoUrl('')}>
                Remove <Octicon icon={X} />
              </UnstyledButton>
            </Box>
            <VideoPreviewContainer>
              <video controls width="100%">
                <source src={videoUrl} />
                Sorry, your browser doesn&apos;t support embedded videos.
              </video>
            </VideoPreviewContainer>
          </>
        )}
      </Box>
      <Box mt={4}>
        <Label>Optional write up</Label>
        <p>
          Optionally, you can write anything you want to say to members that
          wasn&apos;t included in the video below.
        </p>
        <Textarea
          rows={6}
          value={writeUp}
          onChange={e => setWriteUp(e.target.value)}
        />
      </Box>
      <Centered mt={3}>
        <Button type="button" onClick={trySubmit}>
          Submit
        </Button>
      </Centered>
    </form>
  );
};

export default SubmissionForm;
