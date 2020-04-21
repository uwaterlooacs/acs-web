import React from 'react';
import { Switch, Route } from 'react-router-dom';

const VotingVoteHome = React.lazy(() => import('./VotingVoteHome'));

const VoteRoutes = () => {
  return (
    <Switch>
      <Route path="/voting/vote" component={VotingVoteHome} />
    </Switch>
  );
};

export default VoteRoutes;
