import * as firebase from '@firebase/testing';
import { renderHook } from 'utils/test';
import { firebaseConfig } from 'utils/firebase';
import useEvents from './useEvents';

describe('useEvents', () => {
  beforeAll(() => {
    firebase.initializeTestApp(firebaseConfig);
  });

  it('should return an array of events and utility methods', async () => {
    const { result, waitForNextUpdate } = renderHook(useEvents);
    await waitForNextUpdate();
    expect(Array.isArray(result.current.events)).toBeTruthy();
  });
});
