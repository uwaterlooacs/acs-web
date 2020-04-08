import styled, { StyledComponentProps, css } from 'styled-components/macro';
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

type SelectProps = StyledComponentProps<
  'select',
  any,
  GenericInputProps,
  never
>;

const Select = styled.select<SelectProps>(
  ({ theme, error }) => css`
    font-size: ${theme.fontSizes.S}px;
    line-height: ${theme.lineHeights.M};
    width: 100%;
    height: 30px;
    padding: 3px ${theme.space.S}px;
    margin: ${theme.space.XS}px;
    border-radius: 4px;
    border: 1px solid ${error ? theme.colors.error : theme.colors.lightgrey};
    background-color: ${error ? theme.colors.lighterror : 'inherit'};
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  `,
  compose(space, layout, color, typography, border, shadow),
);

export default Select;
