import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Box from 'components/Box';
import Centered from 'components/utils/Centered';
import { Select } from 'components/utils/input';
import Button from 'components/buttons/Button';
import UnstyledLink from 'components/buttons/UnstyledLink';
import { useUser } from 'modules/users';
import { POSITIONS_OPTIONS } from '../../constants';

const VotingSubmitHome = () => {
  const { user, isSignUpComplete } = useUser();

  const [position, setPosition] = useState(POSITIONS_OPTIONS[0].value);

  if (!isSignUpComplete) {
    return <Redirect to="/voting" />;
  }

  return (
    <Box>
      <Box mt={2} p={3} m="0 auto" maxWidth={600}>
        <p>Hey {user.name}!</p>
        <p>What position do you want to apply for?</p>
        <Select value={position} onChange={e => setPosition(e.target.value)}>
          {POSITIONS_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Centered mt={3}>
          <UnstyledLink to={`/voting/submission/${position}`}>
            <Button>Continue</Button>
          </UnstyledLink>
        </Centered>
      </Box>
    </Box>
  );
};

export default VotingSubmitHome;
