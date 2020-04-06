import { StyledComponentProps } from 'styled-components/macro';
import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  BorderProps,
  ShadowProps,
} from 'styled-system';

type StyledSystemInputProps = SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps;

type OtherInputProps = {
  error?: boolean;
};

export type InputProps = StyledComponentProps<
  'input',
  any,
  StyledSystemInputProps & OtherInputProps,
  never
>;
