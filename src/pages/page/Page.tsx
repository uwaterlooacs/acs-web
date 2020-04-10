import React from 'react';
import Box from 'components/Box';
import Centered from 'components/utils/Centered';
import logo from './acs-logo-color-title.jpg';

const Page: React.FC = ({ children }) => {
  return (
    <Box mt={5} mb={5}>
      <Centered>
        <img src={logo} alt="UW ACS logo" />
      </Centered>
      {children}
    </Box>
  );
};

export default Page;
