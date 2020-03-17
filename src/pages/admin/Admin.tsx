import React from 'react';
import Page from 'pages/page';
import Box from 'components/Box';
import AddRoleForm from 'components/forms/AddRoleForm';

const Admin = () => {
  return (
    <Page>
      <Box>
        <AddRoleForm></AddRoleForm>
      </Box>
    </Page>
  );
};

export default Admin;
