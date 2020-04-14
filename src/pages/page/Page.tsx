import React from 'react';
import Box from 'components/Box';
import Centered from 'components/utils/Centered';
import UnstyledLink from 'components/buttons/UnstyledLink';
import Header from './Header';
import logo from './acs-logo-color-title.jpg';

const Page: React.FC = ({ children }) => {
  return (
    <Box mb={5}>
      <Header />
      <Centered>
        <UnstyledLink to="/">
          <img src={logo} alt="UW ACS logo" />
        </UnstyledLink>
      </Centered>
      {children}
    </Box>
  );
};

export default Page;
