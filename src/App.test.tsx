import React from 'react';
import { waitForElement } from '@testing-library/react';
import { render } from 'utils/test';
import App from './App';

test('renders without exploding :(', async done => {
  const { getByText } = render(<App />);
  await waitForElement(() => getByText(/List of events/i));

  done();
});
