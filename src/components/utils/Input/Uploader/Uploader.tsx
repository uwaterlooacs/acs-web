import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useStorage } from 'reactfire';
import Box, { BoxProps } from 'components/Box';
import { UploaderContainer } from './elements';
import { processFile } from './utils';
import Octicon, { CloudUpload } from '@primer/octicons-react';
import Centered from 'components/utils/Centered';
import Spinner from 'components/utils/Spinner';

export type UploaderProps = BoxProps & {
  storagePath: string;
  accept: string;
  onUploadComplete: (imageUrls: string[]) => void;
  disabled?: boolean;
  multiple?: boolean;
};
const Uploader = ({
  storagePath,
  accept,
  onUploadComplete,
  disabled = false,
  multiple = true,
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

      onUploadComplete(uploadedImages);
      setImageUrls(uploadedImages);
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
        {...boxProps}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Box>
          {uploadingCount === 0 ? (
            <>
              <Centered>
                <Octicon size="large" icon={CloudUpload} />
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
