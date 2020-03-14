import React from 'react';
import Page from 'pages/page';
import Box from 'components/Box';
import AddRoleForm from 'components/forms/AddRoleForm';
import RolesList from 'components/lists/RolesList';

const Admin = () => {
  return (
    <Page>
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <AddRoleForm></AddRoleForm>
        <RolesList></RolesList>
      </Box>
    </Page>
  );
};

export default Admin;
