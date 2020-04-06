import React from 'react';
import Input from './Input';
import Centered from 'components/utils/Centered';

export default { title: 'Utils|Input' };

export const Base = () => {
  return (
    <Centered>
      <Input width={200} type="text" />
    </Centered>
  );
};

export const Error = () => {
  return (
    <Centered>
      <Input width={200} type="text" error />
    </Centered>
  );
};
