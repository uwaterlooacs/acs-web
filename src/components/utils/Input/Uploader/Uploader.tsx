import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useStorage } from 'reactfire';
import Octicon, { CloudUpload } from '@primer/octicons-react';
import Box, { BoxProps } from 'components/Box';
import Centered from 'components/utils/Centered';
import Spinner from 'components/utils/Spinner';
import { UploaderContainer } from './elements';
import { processFile } from './utils';

export type UploaderProps = BoxProps & {
  storagePath: string;
  accept: string;
  onUploadComplete: (imageUrls: string[]) => void;
  disabled?: boolean;
  multiple?: boolean;
  error?: boolean;
};
const Uploader = ({
  storagePath,
  accept,
  onUploadComplete,
  disabled = false,
  multiple = true,
  error = false,
  ...boxProps
}: UploaderProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploadingCount, setUploadingCount] = useState(0);
  const storage = useStorage();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const uploadedImages = [...imageUrls];
      await Promise.all(
        acceptedFiles.map(async file => {
          const newImageUrl = await processFile(file, storage, storagePath, {
            preUpload: () => setUploadingCount(count => count + 1),
            postUpload: () => setUploadingCount(count => count - 1),
          });
          uploadedImages.push(newImageUrl);
        }),
      );

      setImageUrls(uploadedImages);
      onUploadComplete(uploadedImages);
    },
    [storage, storagePath, imageUrls, onUploadComplete],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    disabled,
    multiple,
  });

  return (
    <>
      <UploaderContainer
        data-testid="uploader-dropzone"
        error={error}
        {...boxProps}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Box>
          {uploadingCount === 0 ? (
            <>
              <Centered>
                <Octicon size="medium" icon={CloudUpload} />
              </Centered>
              <p>Click or drop to upload</p>
            </>
          ) : (
            <Spinner color="lightgrey" />
          )}
        </Box>
      </UploaderContainer>
    </>
  );
};

export default Uploader;
