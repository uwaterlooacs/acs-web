import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';
import css from '@styled-system/css';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
};
export const Button = styled(UnstyledButton)<ButtonProps>(
  css({
    borderRadius: 4,
    border: '1px solid',
    color: 'primary',
    p: 2,
    '&:hover, &:focus': {
      color: 'white',
      backgroundColor: 'primary',
      outline: 0,
    },
    '&:active': {
      boxShadow: 'light',
    },
  }),
  // variant({
  //   variants: {
  //     primary: {
  //       color: 'primary',
  //       '&:hover, &:focus': {
  //         bg: 'primary/light',
  //       },
  //     },
  //     secondary: {
  //       color: 'secondary',
  //       '&:hover, &:focus': {
  //         bg: 'secondary/light',
  //       },
  //     },
  //   },
  // }),
);

export default Button;
