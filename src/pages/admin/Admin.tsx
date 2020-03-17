import React from 'react';
import Page from 'pages/page';
import Box from 'components/Box';
import AddTermForm from 'components/forms/AddTermForm';

const Admin = () => {
  return (
    <Page>
      <Box>
        <AddTermForm></AddTermForm>
      </Box>
    </Page>
  );
};

export default Admin;
