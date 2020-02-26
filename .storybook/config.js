import React from 'react';
import { configure, addDecorator } from '@storybook/react';

addDecorator(Story => (
    <Story />
  )
);

configure(require.context('../src', true, /\.stories\.tsx?$/), module);
