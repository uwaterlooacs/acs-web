import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
};
export const Button = styled(UnstyledButton)<ButtonProps>``;

export default Button;
