import React from 'react';
import { render, screen, waitFor } from 'utils/test';
import { mockFileData, dispatchEvt } from './testUtils';
import { JsonUploader } from './Uploader.stories';

jest.mock('./utils');

describe('Uploader', () => {
  describe('JSONUploader', () => {
    it('should accept a JSON file on drop', async () => {
      const onUploadComplete = jest.fn();
      render(<JsonUploader onUploadComplete={onUploadComplete} />);

      await screen.findByText('Click or drop to upload');

      const file = new File([JSON.stringify({ ping: true })], 'ping.json', {
        type: 'application/json',
      });
      const data = mockFileData([file]);
      const dropzone = screen.getByTestId('uploader-dropzone');

      dispatchEvt(
        dropzone.querySelector('input') as HTMLInputElement,
        'drop',
        data,
      );

      await waitFor(() => expect(onUploadComplete).toHaveBeenCalledTimes(1));
    });

    it('should not accept a TXT file on drop', async () => {
      const onUploadComplete = jest.fn();
      render(<JsonUploader onUploadComplete={onUploadComplete} />);

      await screen.findByText('Click or drop to upload');

      const file = new File([JSON.stringify({ ping: true })], 'ping.json', {
        type: 'text/plain',
      });
      const data = mockFileData([file]);
      const dropzone = screen.getByTestId('uploader-dropzone');

      dispatchEvt(
        dropzone.querySelector('input') as HTMLInputElement,
        'drop',
        data,
      );

      await waitFor(() => expect(onUploadComplete).toHaveBeenCalledTimes(1));
    });
  });
});
