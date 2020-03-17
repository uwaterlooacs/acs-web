import KEYS from './keys';
import { useEffect, useMemo } from 'react';
import { UseKeyListenerOptions } from './types';

export const useKeyListener = (
  keyCode: keyof typeof KEYS,
  callback: () => void,
  { preventDefault = false }: UseKeyListenerOptions = {},
) => {
  const onKeyDown = useMemo(
    () => (e: KeyboardEvent) => {
      if (e.keyCode === KEYS[keyCode]) {
        callback();
        if (preventDefault) {
          e.preventDefault();
        }
      }
    },
    [keyCode, callback, preventDefault],
  );

  const removeKeyListener = useMemo(
    () => () => {
      document.removeEventListener('keydown', onKeyDown, false);
    },
    [onKeyDown],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);
    return removeKeyListener;
  }, [onKeyDown, removeKeyListener]);

  return removeKeyListener;
};
