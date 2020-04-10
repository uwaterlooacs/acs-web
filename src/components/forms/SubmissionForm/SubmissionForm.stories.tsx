import React from 'react';
import SubmissionForm, { SubmissionFormProps } from './SubmissionForm';
import { action } from '@storybook/addon-actions';
import Box from 'components/Box';

export default { title: 'Forms|SubmissionForm' };

const mockProps: SubmissionFormProps = {
  position: 'president',
  addSubmission: action('addSubmission') as any,
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
