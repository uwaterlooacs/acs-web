import React from 'react';
import Box from 'components/Box';
import Page from 'pages/page';
import VoteRoutes from './VotingRoutes';

const VotePage = () => {
  return (
    <Page>
      <Box mt={4} fontSize="XL" textAlign="center" fontWeight="bolder">
        Voting
      </Box>
      <VoteRoutes />
    </Page>
  );
};

export default VotePage;
