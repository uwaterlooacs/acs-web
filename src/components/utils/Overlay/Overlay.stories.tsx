import React, { useState } from 'react';
import Overlay from './Overlay';
import Button from 'components/buttons/Button';

export const MOCK_TEXT = {
  visible: 'Hello from the Overlay',
  notvisible: 'Not visible. Text is not displayed',
  toggleable: 'Click below to exit or press escape',
};

export default { title: 'Utils|Overlay', excludeStories: /mock.*/i };

const useOverlay = (initialVisible?: boolean) => {
  const [visible, setVisible] = useState(!!initialVisible);
  return { visible, setVisible };
};

export const Visible = () => {
  const props = useOverlay(true);
  return <Overlay {...props}>{MOCK_TEXT.visible}</Overlay>;
};

export const NotVisible = () => {
  const props = useOverlay(false);
  return <Overlay {...props}>{MOCK_TEXT.notvisible}</Overlay>;
};

export const Toggleable = () => {
  const props = useOverlay();
  return (
    <>
      <Button onClick={() => props.setVisible(true)}>
        Click to open overlay
      </Button>
      <Overlay {...props}>
        <p>{MOCK_TEXT.toggleable}</p>
        <Button onClick={() => props.setVisible(false)}>
          Click to close overlay
        </Button>
      </Overlay>
    </>
  );
};
