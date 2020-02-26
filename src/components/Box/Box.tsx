import styled, { StyledComponentProps } from 'styled-components/macro';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  flexbox,
  FlexboxProps,
} from 'styled-system';

export type BoxProps = StyledComponentProps<
  'div',
  any,
  SpaceProps &
    LayoutProps &
    ColorProps &
    TypographyProps &
    BorderProps &
    ShadowProps &
    FlexboxProps,
  never
>;
const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${shadow}
  ${flexbox}
`;

export default Box;
