import React from 'react';
import Button from './Button';

export const MOCK_TEXT = {
  base: 'Button',
  primary: 'Primary',
  secondary: 'Secondary',
};

export default { title: 'Buttons|Button', excludeStories: /mock.*/i };

export const Base = () => {
  return <Button>{MOCK_TEXT.base}</Button>;
};

// export const Primary = () => {
//   return <Button variant="primary">{MOCK_TEXT.primary}</Button>;
// };

// export const Secondary = () => {
//   return <Button variant="secondary">{MOCK_TEXT.secondary}</Button>;
// };
