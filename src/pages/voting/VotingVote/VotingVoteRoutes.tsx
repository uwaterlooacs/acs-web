import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useUser } from 'modules/users';

const VotingVoteHome = React.lazy(() => import('./VotingVoteHome'));

const VoteRoutes = () => {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return <Redirect to="/voting" />;
  }

  return (
    <Switch>
      <Route path="/voting/vote" component={VotingVoteHome} />
    </Switch>
  );
};

export default VoteRoutes;
