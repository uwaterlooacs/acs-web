import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import theme from './theme';
import GlobalStyle from './GlobalStyle';

type ThemeDecoratorProps = {
  children: React.ReactNode;
};
const ThemeDecorator = ({ children }: ThemeDecoratorProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default ThemeDecorator;
