import React from 'react';
import { action } from '@storybook/addon-actions';
import Box from 'components/Box';
import Submission, { SubmissionProps } from './Submission';

export default { title: 'Submission', excludeStories: /mock.*/i };

const mockProps: SubmissionProps = {
  submission: {
    id: 'SUBMISSION_ID',
    candidate: 'CANDIDATE_ID',
    fullName: 'Jane Doe',
    position: 'president',
    videoUrl:
      'https://firebasestorage.googleapis.com/v0/b/acs-web-5aaaf.appspot.com/o/W20%2Fvoting%2Fvideosubmissions%2Fsecretary%2Fe771e6d7-9aac-4414-b575-95f8b0992d38?alt=media&token=f4749968-918c-4a30-b507-1165aa9c9a6b',
    writeUp:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum nibh et iaculis tempor. Mauris cursus vel urna non viverra. Vivamus metus orci, efficitur at urna vitae, consectetur porta libero.',
    createdOn: ({
      toDate: () => new Date('2020-03-07T03:24:00'),
    } as unknown) as firebase.firestore.Timestamp,
    modifiedOn: ({
      toDate: () => new Date('2020-03-07T03:24:00'),
    } as unknown) as firebase.firestore.Timestamp,
  },
  castVote: async () => {
    action('castVote')();
  },
};

export const base = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box width={600}>
        <Submission {...mockProps} />
      </Box>
    </Box>
  );
};

export const votedFor = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box width={600}>
        <Submission {...mockProps} votedFor />
      </Box>
    </Box>
  );
};
