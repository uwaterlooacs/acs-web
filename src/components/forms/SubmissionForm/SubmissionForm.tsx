import React, { useState } from 'react';
import Octicon, { Person, X } from '@primer/octicons-react';
import Box from 'components/Box';
import { Label, Input, Uploader, Textarea } from 'components/utils/input';
import UnstyledButton from 'components/buttons/UnstyledButton';
import Button from 'components/buttons/Button';
import Centered from 'components/utils/Centered';
import { SubmissionUserData } from 'modules/submissions';
import { MediaPreviewContainer } from './elements';

export type SubmissionFormProps = {
  position: string;
  submit: (newSubmissionData: SubmissionUserData) => Promise<void>;
  initialName?: string;
  initialImageUrl?: string;
  initialVideoUrl?: string;
  initialWriteUp?: string;
};
const SubmissionForm: React.FC<SubmissionFormProps> = ({
  position,
  submit,
  initialName = '',
  initialImageUrl = '',
  initialVideoUrl = '',
  initialWriteUp = '',
}) => {
  const [fullName, setFullName] = useState(initialName);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [videoUrl, setVideoUrl] = useState(initialVideoUrl);
  const [writeUp, setWriteUp] = useState(initialWriteUp);

  const [tryedToSubmit, setTryedToSubmit] = useState(false);

  const showFullNameError = tryedToSubmit && !fullName;
  const showVideoUrlError = tryedToSubmit && !videoUrl;
  const showImageUrlError = tryedToSubmit && !imageUrl;

  const onVideoUploaded = (downloadUrls: string[]) => {
    setVideoUrl(downloadUrls[0]);
  };
  const onImageUploaded = (downloadUrls: string[]) => {
    setImageUrl(downloadUrls[0]);
  };

  const trySubmit = async () => {
    if (!videoUrl || !fullName) {
      setTryedToSubmit(true);
      return;
    }
    await submit({
      fullName,
      position,
      imageUrl,
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
        <Label error={showFullNameError}>
          Picture Submission (for IG post)
        </Label>
        <p>
          Upload a picture of yourself that we can use for an Instagram post.
        </p>
        {!imageUrl ? (
          <>
            <p>
              Your picture, along with the pictures that other candidates for
              this position upload, will be posted on Instagram once submissions
              are closed to announce the candidates.
            </p>
            <Box height={200}>
              <Uploader
                error={showImageUrlError}
                storagePath={`W20/voting/imagesubmissions/${position}`}
                accept="image/*"
                onUploadComplete={onImageUploaded}
                multiple={false}
              />
            </Box>
            {showImageUrlError && (
              <Box color="error" fontSize="S" mb={3}>
                Please upload an image of yourself.
              </Box>
            )}
          </>
        ) : (
          <>
            <p>
              {!tryedToSubmit
                ? 'The profile photo that we got from your login method was used as a default.'
                : 'Image successfully uploaded!'}{' '}
              You can view it below or click remove to upload a different
              picture.
            </p>
            <Box display="flex" justifyContent="flex-end">
              <UnstyledButton display="inline" onClick={() => setImageUrl('')}>
                Remove <Octicon icon={X} />
              </UnstyledButton>
            </Box>
            <MediaPreviewContainer>
              <img src={imageUrl} alt="Instagram post" />
            </MediaPreviewContainer>
          </>
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
            <MediaPreviewContainer>
              <video controls width="100%">
                <source src={videoUrl} />
                Sorry, your browser doesn&apos;t support embedded videos.
              </video>
            </MediaPreviewContainer>
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
