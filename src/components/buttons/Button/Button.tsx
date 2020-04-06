import styled, { css } from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';

export const Button = styled(UnstyledButton)(
  ({ theme }) => css`
    color: ${theme.colors.white} !important;
    text-transform: uppercase;
    text-decoration: none;
    background: ${theme.colors.primary};
    padding: ${theme.space.M}px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;

    &:hover {
      letter-spacing: 1px;
      background: ${theme.colors.grey};
      box-shadow: ${theme.shadows.medium};
      transition: all 0.4s ease 0s;
    }

    &:disabled {
      cursor: not-allowed;
      letter-spacing: 0;
      background: ${theme.colors.lightgrey};
      box-shadow: none;
    }
  `,
);

export default Button;
