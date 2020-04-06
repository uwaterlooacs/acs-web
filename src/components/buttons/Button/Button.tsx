import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';

export const Button = styled(UnstyledButton)`
  color: ${({ theme }) => theme.colors.white} !important;
  text-transform: uppercase;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;

  &:hover {
    letter-spacing: 1px;
    background: ${({ theme }) => theme.colors.grey};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transition: all 0.4s ease 0s;
  }

  &:disabled {
    cursor: not-allowed;
    letter-spacing: 0;
    background: ${({ theme }) => theme.colors.lightgrey};
    box-shadow: none;
  }
`;

export default Button;
