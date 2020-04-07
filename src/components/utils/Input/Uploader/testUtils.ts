import { fireEvent } from '@testing-library/react';

export const mockFileData = (files: File[]) => {
  return {
    dataTransfer: {
      files,
      items: files.map(file => ({
        kind: 'file',
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  };
};

export const dispatchEvt = (node: HTMLElement, type: string, data: any) => {
  const event = new Event(type, { bubbles: true });
  Object.assign(event, data);
  fireEvent(node, event);
};
