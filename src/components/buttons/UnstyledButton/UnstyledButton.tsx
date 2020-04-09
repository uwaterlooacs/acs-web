import styled from 'styled-components/macro';
import {
  space,
  layout,
  color,
  typography,
  border,
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  BorderProps,
} from 'styled-system';

export type UnstyledButtonProps = SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  BorderProps;
const UnstyledButton = styled.button<UnstyledButtonProps>`
  border: none;
  background: none;
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
`;

export default UnstyledButton;
