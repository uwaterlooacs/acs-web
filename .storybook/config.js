import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import AppProvider from 'components/AppProvider';

addDecorator(Story => (
    <AppProvider><Story /></AppProvider>
  )
);

configure(require.context('../src', true, /\.stories\.tsx?$/), module);
