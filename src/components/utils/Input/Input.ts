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
} from 'styled-system';

type InputProps = StyledComponentProps<
  'input',
  any,
  SpaceProps &
    LayoutProps &
    ColorProps &
    TypographyProps &
    BorderProps &
    ShadowProps,
  never
>;
const Input = styled.input<InputProps>`
  font-size: ${({ theme }) => theme.lineHeights.M};
  line-height: ${({ theme }) => theme.lineHeights.M};
  width: 100%;
  padding: ${({ theme }) => `3px ${theme.space.S}px`};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.lightgrey};
  box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${shadow}
`;

export default Input;
