import { StyledComponentProps } from 'styled-components/macro';
import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  BorderProps,
  ShadowProps,
} from 'styled-system';

type StyledSystemProps = SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps;

type OtherProps = {
  error?: boolean;
};

export type GenericInputProps = StyledSystemProps & OtherProps;
