import React from 'react';
import { ThemeDecorator } from 'utils/theme';

const AppProvider: React.FC = ({ children }) => {
  return <ThemeDecorator>{children}</ThemeDecorator>;
};

export default AppProvider;
