import React from 'react';
import Box from 'components/Box';
import AddRoleForm from 'components/forms/AddRoleForm';

const AddRole = () => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      <AddRoleForm></AddRoleForm>
    </Box>
  );
};

export default AddRole;
