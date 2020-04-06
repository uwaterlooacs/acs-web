import React from 'react';
import { render, screen } from 'utils/test';
import { Base } from './Button.stories';

describe('<Button />', () => {
  it('should render with child', () => {
    render(<Base />);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
