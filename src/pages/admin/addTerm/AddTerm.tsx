import React from 'react';
import Box from 'components/Box';
import AddTermForm from 'components/forms/AddTermForm';

const AddTerm = () => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      <AddTermForm></AddTermForm>
    </Box>
  );
};

export default AddTerm;
