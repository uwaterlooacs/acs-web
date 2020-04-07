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
  shadow,
  ShadowProps,
} from 'styled-system';
import { Link } from 'react-router-dom';

type UnstyledButtonProps = SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps;
const UnstyledButton = styled(Link)<UnstyledButtonProps>`
  border: none;
  background: none;
  text-decoration: none;
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${shadow}
`;

UnstyledButton.defaultProps = {
  color: 'inherit',
};

export default UnstyledButton;
