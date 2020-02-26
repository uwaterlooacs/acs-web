import {
  render as renderImpl,
  RenderResult,
  RenderOptions,
} from '@testing-library/react';
import AppProvider from 'components/AppProvider';

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => {
  const result = renderImpl(ui, {
    ...options,
    wrapper: AppProvider,
  });
  return result;
};

export default render;
