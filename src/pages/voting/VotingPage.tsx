import React from 'react';
import Box from 'components/Box';
import Page from 'pages/page';
import VotingComplete from './VotingComplete';

const VotePage = () => {
  return (
    <Page>
      <Box mt={4} fontSize="XL" textAlign="center" fontWeight="bolder">
        Voting
      </Box>
      <VotingComplete />
    </Page>
  );
};

export default VotePage;
