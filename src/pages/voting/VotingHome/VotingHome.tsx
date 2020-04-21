import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from 'modules/users';
import VoteHome from './VoteHome';

const VotingHome = () => {
  const { isLoggedIn, isSignUpComplete } = useUser();

  if (isLoggedIn && !isSignUpComplete) {
    return <Redirect to="/voting/completesignup" />;
  }

  return <VoteHome />;
};

export default VotingHome;
