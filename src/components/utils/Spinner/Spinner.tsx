import React from 'react';
import { SpinnerContainer } from './elements';
import { BoxProps } from 'components/Box';

type SpinnerProps = BoxProps;
const Spinner: React.FC<SpinnerProps> = ({ ...containerProps }) => {
  return (
    <SpinnerContainer {...containerProps}>
      <div />
      <div />
      <div />
    </SpinnerContainer>
  );
};

export default Spinner;
