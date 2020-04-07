import React from 'react';
import Textarea from './Textarea';
import Centered from 'components/utils/Centered';

export default { title: 'Utils|Textarea' };

export const Base = () => {
  return (
    <Centered>
      <Textarea width={200} />
    </Centered>
  );
};

export const Error = () => {
  return (
    <Centered>
      <Textarea width={200} error />
    </Centered>
  );
};
