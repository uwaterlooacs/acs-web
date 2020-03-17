import React from 'react';
import { render } from '@testing-library/react';
import {
  Base,
  // Primary,
  // Secondary,
  MOCK_TEXT,
} from './Button.stories';

describe('<Button />', () => {
  it('should render without variant specified', () => {
    const { getByText } = render(<Base />);
    expect(getByText(MOCK_TEXT.base)).toBeInTheDocument();
  });

  // it('should render primary variant', () => {
  //   const { getByText } = render(<Primary />);
  //   const button = getByText(MOCK_TEXT.primary);

  //   expect(button).toBeInTheDocument();
  //   expect(button).toHaveStyleRule('color', 'primary');
  //   expect(button).toHaveStyleRule('background-color', 'primary/light', {
  //     modifier: ':hover',
  //   });
  // });

  // it('should render secondary variant', () => {
  //   const { getByText } = render(<Secondary />);
  //   const button = getByText(MOCK_TEXT.secondary);

  //   expect(button).toBeInTheDocument();
  //   expect(button).toHaveStyleRule('color', 'secondary');
  //   expect(button).toHaveStyleRule('background-color', 'secondary/light', {
  //     modifier: ':hover',
  //   });
  // });
});
