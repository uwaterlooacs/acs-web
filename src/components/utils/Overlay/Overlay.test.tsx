import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Toggleable, MOCK_TEXT } from './Overlay.stories';
import { KEYS } from 'utils/keys';

describe('<Overlay />', () => {
  it('should open and close', () => {
    const { queryByText, getByText } = render(<Toggleable />);

    expect(queryByText(MOCK_TEXT.toggleable)).not.toBeInTheDocument();

    fireEvent.click(getByText(/open/i));
    expect(queryByText(MOCK_TEXT.toggleable)).toBeInTheDocument();

    fireEvent.click(getByText(/close/i));
    expect(queryByText(MOCK_TEXT.toggleable)).not.toBeInTheDocument();

    fireEvent.click(getByText(/open/i));
    expect(queryByText(MOCK_TEXT.toggleable)).toBeInTheDocument();

    fireEvent.keyDown(document, { keyCode: KEYS.ESCAPE_KEY });
    expect(queryByText(MOCK_TEXT.toggleable)).not.toBeInTheDocument();
  });
});
