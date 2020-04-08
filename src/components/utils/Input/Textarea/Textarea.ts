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

type TextareaProps = StyledComponentProps<
  'textarea',
  any,
  GenericInputProps,
  never
>;

const Textarea = styled.textarea<TextareaProps>(
  ({ theme, error }) => css`
    font-size: ${theme.fontSizes.S}px;
    line-height: ${theme.lineHeights.M};
    width: 100%;
    padding: 3px ${theme.space.S}px;
    margin: ${theme.space.XS}px;
    border-radius: 4px;
    border: 1px solid ${error ? theme.colors.error : theme.colors.lightgrey};
    background-color: ${error ? theme.colors.lighterror : 'inherit'};
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  `,
  compose(space, layout, color, typography, border, shadow),
);

export default Textarea;
