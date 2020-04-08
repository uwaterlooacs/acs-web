import styled, { css } from 'styled-components/macro';
import Centered from 'components/utils/Centered';
import { GenericInputProps } from '../types';

export const UploaderContainer = styled(Centered)<GenericInputProps>(
  ({ theme, error }) => css`
    cursor: pointer;
    margin: ${theme.space.XS}px;
    border: 4px dashed ${error ? theme.colors.error : theme.colors.lightgrey};
    background-color: ${error ? theme.colors.lighterror : 'inherit'};
    border-radius: 16px;
    box-shadow: inset 0 1px 10px rgba(27, 31, 35, 0.075);
    transition: all 0.2s ease 0s;

    &:hover,
    &:active {
      box-shadow: inset 0 1px 10px rgba(27, 31, 35, 0.25);
    }
  `,
);
