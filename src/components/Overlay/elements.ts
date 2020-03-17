import styled, { css } from 'styled-components/macro';
import Box from 'components/Box';

type OverlayContainerProps = {
  visible: boolean;
};
export const OverlayContainer = styled(Box)<OverlayContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.9;

  ${props =>
    !props.visible &&
    css`
      display: none;
    `}
`;

OverlayContainer.defaultProps = {
  bg: 'white',
};
