import React from 'react';
import Uploader, { UploaderProps } from './Uploader';
import { action } from '@storybook/addon-actions';
import Box from 'components/Box';

export default { title: 'Utils|Uploader', excludeStories: /mock.*/ };

export const mockProps: UploaderProps = {
  storagePath: 'JSONUploaderStory',
  accept: 'application/json',
  onUploadComplete: imageUrls =>
    action(`onUploadComplete | imageUrls = ${imageUrls.join(', ')}`),
  disabled: false,
};

export const JsonUploader = (props: Partial<UploaderProps>) => {
  return (
    <Box p={3} height={300} width={600}>
      <Uploader {...mockProps} {...props} />
    </Box>
  );
};

export const TxtUploader = (props: Partial<UploaderProps>) => {
  return (
    <Box p={3} height={300} width={600}>
      <Uploader {...mockProps} {...props} accept="text/plain" />
    </Box>
  );
};
