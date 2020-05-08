import React from 'react';
import { Switch, Route } from 'react-router-dom';

const VotingHome = React.lazy(() => import('./VotingHome'));
const VotingCompleteSignUp = React.lazy(() => import('./VotingCompleteSignUp'));
const VotingSubmission = React.lazy(() => import('./VotingSubmission'));

const VotingRoutes = () => {
  return (
    <Switch>
      <Route path="/voting/submission" component={VotingSubmission} />
      <Route path="/voting/completesignup" component={VotingCompleteSignUp} />
      <Route path="/voting" component={VotingHome} />
    </Switch>
  );
};

export default VotingRoutes;
