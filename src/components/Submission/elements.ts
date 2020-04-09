import styled, { css } from 'styled-components/macro';
import Box, { BoxProps } from 'components/Box';

type SubmissionContainerProps = BoxProps & {
  votedFor?: boolean;
};
export const SubmissionContainer = styled(Box)<SubmissionContainerProps>(
  ({ theme, votedFor }) => css`
    margin: ${theme.space.XS}px;
    background-color: ${votedFor ? theme.colors.lightprimary : 'inherit'};
    border: 1px solid
      ${votedFor ? theme.colors.primary : theme.colors.lightgrey};
    border-radius: 4px;

    video {
      max-height: 500px;
    }
  `,
);

SubmissionContainer.defaultProps = {
  p: ['M', 'L'],
};
