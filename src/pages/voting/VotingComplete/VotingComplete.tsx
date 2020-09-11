import React from 'react';
import Box from 'components/Box';
import { useUser } from 'modules/users';
import { POSITIONS_OPTIONS } from '../constants';

const VotingComplete = () => {
  const { user, isLoggedIn } = useUser();
  return (
    <Box>
      <Box mt={2} p={3} m="0 auto" maxWidth={600}>
        {isLoggedIn && <p>Hey {user.name}!</p>}
        <p>Voting is complete and the results have been verified.</p>
        <p>Below are the elected members for each positon.</p>
        <ul>
          {POSITIONS_OPTIONS.map(position => {
            return (
              <li key={position.value}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <p>
                      {position.value === 'social coordinator'
                        ? 'Social Coordinators'
                        : position.label}
                      :
                    </p>
                    <p>
                      <strong>{position.winner}</strong>{' '}
                      <span role="img" aria-label={position.ariaLabel}>
                        {position.emoji}
                      </span>
                    </p>
                  </Box>
                </Box>
              </li>
            );
          })}
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
