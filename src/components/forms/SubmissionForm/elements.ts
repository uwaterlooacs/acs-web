import styled, { css } from 'styled-components/macro';
import Box from 'components/Box';

export const VideoPreviewContainer = styled(Box)(
  ({ theme }) => css`
    margin: ${theme.space.XS}px;

    video {
      max-height: 500px;
    }
  `,
);
