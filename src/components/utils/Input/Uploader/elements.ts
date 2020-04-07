import styled, { css } from 'styled-components/macro';
import Centered from 'components/utils/Centered';

export const UploaderContainer = styled(Centered)(
  ({ theme }) => css`
    cursor: pointer;
    margin: ${theme.space.XS}px;
    border: 4px dashed ${theme.colors.lightgrey};
    border-radius: 16px;
    box-shadow: inset 0 1px 10px rgba(27, 31, 35, 0.075);
    transition: all 0.2s ease 0s;

    &:hover,
    &:active {
      box-shadow: inset 0 1px 10px rgba(27, 31, 35, 0.45);
    }
  `,
);
