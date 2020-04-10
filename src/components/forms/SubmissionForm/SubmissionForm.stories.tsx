import React from 'react';
import SubmissionForm, { SubmissionFormProps } from './SubmissionForm';
import { action } from '@storybook/addon-actions';
import Box from 'components/Box';

export default { title: 'Forms|SubmissionForm' };

const mockProps: SubmissionFormProps = {
  position: 'president',
  submit: action('submit') as any,
  initialName: 'Jane Doe',
};

export const base = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={600}>
        <SubmissionForm {...mockProps} />
      </Box>
    </Box>
  );
};

export const filled = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={600}>
        <SubmissionForm
          {...mockProps}
          initialVideoUrl="https://firebasestorage.googleapis.com/v0/b/acs-web-5aaaf.appspot.com/o/W20%2Fvoting%2Fvideosubmissions%2Fpresident%2F5cd92f3c-c36f-4036-8cce-f842da83ba89?alt=media&token=ba575808-6114-417f-a2b1-fb80fb948c52"
          initialWriteUp="Intial writeup"
        />
      </Box>
    </Box>
  );
};
