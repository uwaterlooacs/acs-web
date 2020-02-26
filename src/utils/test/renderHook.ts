import {
  renderHook as renderHookImpl,
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react-hooks';
import AppProvider from 'components/AppProvider';

const renderHook = <P, R>(
  callback: (props: P) => R,
  options?: RenderHookOptions<P>,
): RenderHookResult<P, R> => {
  const result = renderHookImpl(callback, {
    ...options,
    wrapper: AppProvider,
  });
  return result;
};

export default renderHook;
