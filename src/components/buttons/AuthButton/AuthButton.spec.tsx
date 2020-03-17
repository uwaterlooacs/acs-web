import React from 'react';
import {
  render,
  fireEvent,
  wait,
  waitForElement,
} from '@testing-library/react';
import { Base } from './AuthButton.stories';
import { KEYS } from 'utils/keys';

jest.mock('react-firebaseui/StyledFirebaseAuth');
jest.mock('reactfire');
import { useUser } from 'reactfire';
const useUserMock = useUser as jest.Mock;

describe('<AuthButton />', () => {
  it('should open and close on button press', async () => {
    const { queryByText, getByText } = render(<Base />);

    const button = getByText('Sign in');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByText('Sign in or create an account')).toBeInTheDocument();
    expect(queryByText('Or continue as a guest')).toBeInTheDocument();

    fireEvent.click(getByText('Or continue as a guest'));
    expect(queryByText('Sign in or create an account')).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByText('Sign in or create an account')).toBeInTheDocument();

    fireEvent.keyDown(document, { keyCode: KEYS.ESCAPE_KEY });
    expect(queryByText('Sign in or create an account')).not.toBeInTheDocument();

    /**
     *   I think StyledFirebaseAuth still makes some async calls even tho I mocked
     * it. Waiting here to avoid the act(() => {}) error message.
     */
    await wait();
  });

  it('should display sign out when already signed in', async () => {
    useUserMock.mockReturnValue({
      /* This just needs to be truthy*/
    });
    const { queryByText } = render(<Base />);

    await waitForElement(() => queryByText('Sign out'));
  });
});
