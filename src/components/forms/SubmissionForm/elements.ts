import styled, { css } from 'styled-components/macro';
import Box from 'components/Box';

export const MediaPreviewContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    margin: ${theme.space.XS}px;

    video,
    img {
      max-height: 500px;
      max-width: 100%;
    }
  `,
);
