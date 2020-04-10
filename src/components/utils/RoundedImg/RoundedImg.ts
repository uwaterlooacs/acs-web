import styled, { StyledComponentProps, css } from 'styled-components/macro';
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
  compose,
  flex,
  FlexProps,
} from 'styled-system';

export type RoundedImgProps = StyledComponentProps<
  'div',
  any,
  SpaceProps &
    LayoutProps &
    ColorProps &
    TypographyProps &
    BorderProps &
    ShadowProps &
    FlexProps,
  never
>;

const RoundedImg = styled.img<RoundedImgProps>(
  () => css`
    border-radius: 50%;
  `,
  compose(space, layout, color, typography, border, shadow, flex),
);

export default RoundedImg;
