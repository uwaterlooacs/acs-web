import React from 'react';
import Page from 'pages/page';
import Box from 'components/Box';
import RolesList from 'components/lists/RolesList';

const Vote = () => {
  return (
    <Page>
      <Box>
        <RolesList></RolesList>
      </Box>
    </Page>
  );
};

export default Vote;
