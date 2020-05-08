import React from 'react';
import Box from 'components/Box';
import { useUser } from 'modules/users';

const VotingComplete = () => {
  const { user, isLoggedIn } = useUser();
  return (
    <Box>
      <Box mt={2} p={3} m="0 auto" maxWidth={600}>
        {isLoggedIn && <p>Hey {user.name}!</p>}
        <p>Voting is complete and the results have been verified.</p>
        <p>Below are the elected members for each positon.</p>
        <ul>
          <li>
            <Box>
              <p>President:</p>
              <p>
                <strong>Danicia Solozano</strong>{' '}
                <span role="img" aria-label="crown">
                  👑
                </span>
              </p>
            </Box>
          </li>
          <li>
            <Box>
              <p>Vice-President</p>
              <p>
                <strong>Shiyan Cato</strong>{' '}
                <span role="img" aria-label="sparkle">
                  ✨
                </span>
              </p>
            </Box>
          </li>
          <li>
            <Box>
              <p>Secretary:</p>
              <p>
                <strong>Shania Scotland</strong>{' '}
                <span role="img" aria-label="file cabinet">
                  🗄
                </span>
              </p>
            </Box>
          </li>
        </ul>
        <p>
          Congratulations to our new exec members!{' '}
          <span role="img" aria-label="party popper">
            🎉
          </span>
        </p>
      </Box>
    </Box>
  );
};

export default VotingComplete;
