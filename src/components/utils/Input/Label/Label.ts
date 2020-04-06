import styled, { css, StyledComponentProps } from 'styled-components/macro';
import {
  space,
  layout,
  color,
  typography,
  border,
  shadow,
  compose,
} from 'styled-system';
import { GenericInputProps } from '../types';

type LabelProps = StyledComponentProps<'label', any, GenericInputProps, never>;

const Label = styled.label<LabelProps>(
  ({ theme, error }) => css`
    font-size: ${theme.fontSizes.S}px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${error ? theme.colors.error : 'inherit'};
  `,
  compose(space, layout, color, typography, border, shadow),
);

export default Label;