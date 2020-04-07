import React from 'react';
import { Switch, Route } from 'react-router-dom';

const VoteHome = React.lazy(() => import('./VotingHome'));
const VoteCompleteSignUp = React.lazy(() => import('./VotingCompleteSignUp'));

const VoteRoutes = () => {
  return (
    <Switch>
      <Route path="/voting/completesignup" component={VoteCompleteSignUp} />
      <Route path="/voting" component={VoteHome} />
    </Switch>
  );
};

export default VoteRoutes;
