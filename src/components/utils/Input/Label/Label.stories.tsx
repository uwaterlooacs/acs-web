import React from 'react';
import Label from './Label';
import Centered from 'components/utils/Centered';

export default { title: 'Utils|Label' };

export const Base = () => {
  return (
    <Centered>
      <Label width={200}>Label</Label>
    </Centered>
  );
};

export const Error = () => {
  return (
    <Centered>
      <Label width={200} error>
        Label with error
      </Label>
    </Centered>
  );
};
