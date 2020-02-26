import React from 'react';
import { waitForElement } from '@testing-library/react';
import { render } from 'utils/test';
import App from './App';

test('renders learn react link', async () => {
  const { getByText } = render(<App />);
  await waitForElement(() => getByText(/Riddle me this/i));
});
