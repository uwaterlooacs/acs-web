import styled, { css } from 'styled-components/macro';
import Box, { BoxProps } from 'components/Box';

type SubmissionContainerProps = BoxProps & {
  votedFor?: boolean;
};
export const SubmissionContainer = styled(Box)<SubmissionContainerProps>(
  ({ theme, votedFor }) => css`
    padding: ${theme.space.L}px;
    margin: ${theme.space.XS}px;
    background-color: ${votedFor ? theme.colors.lightprimary : 'inherit'};
    border: 1px solid ${theme.colors.lightgrey};
    border-radius: 4px;

    video {
      max-height: 500px;
    }
  `,
);
