import React from 'react';
import Centered from 'components/utils/Centered';
import Button from './Button';

export default { title: 'Buttons|Button', excludeStories: /mock.*/i };

export const Base = () => {
  return (
    <Centered>
      <Button>Button</Button>
    </Centered>
  );
};

export const Disabled = () => {
  return (
    <Centered>
      <Button disabled>Disabled button</Button>
    </Centered>
  );
};
