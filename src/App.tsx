import React from 'react';
import Box from 'components/Box';
import { useEvents } from 'modules/events';

const App = () => {
  const events = useEvents();
  return <Box>Riddle me this</Box>;
};

export default App;
