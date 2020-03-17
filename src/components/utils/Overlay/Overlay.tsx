import React from 'react';
import { OverlayContainer } from './elements';
import { useKeyListener } from 'utils/keys';

type OverlayProps = {
  visible: boolean;
  setVisible: (visibility: boolean) => void;
  children: React.ReactNode;
};
const Overlay: React.FC<OverlayProps> = ({ visible, setVisible, children }) => {
  useKeyListener('ESCAPE_KEY', () => setVisible(false));

  return (
    <OverlayContainer visible={visible}>{visible && children}</OverlayContainer>
  );
};

export default Overlay;
