import React from 'react';
import Select from './Select';
import Centered from 'components/utils/Centered';

export default { title: 'Utils|Select' };

export const Base = () => {
  return (
    <Centered>
      <Select width={200}>
        <option value="first">First option</option>
        <option value="second">Second option</option>
      </Select>
    </Centered>
  );
};

export const Error = () => {
  return (
    <Centered>
      <Select width={200} error>
        <option value="first">First option</option>
        <option value="second">Second option</option>
      </Select>
    </Centered>
  );
};
