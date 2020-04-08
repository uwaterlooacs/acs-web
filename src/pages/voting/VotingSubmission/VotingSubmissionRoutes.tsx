import React from 'react';
import { Switch, Route } from 'react-router-dom';

const VotingSubmitHome = React.lazy(() => import('./VotingSubmissionHome'));
const VotingSubmitPosition = React.lazy(() =>
  import('./VotingSubmissionPosition'),
);

const VoteRoutes = () => {
  return (
    <Switch>
      <Route
        path="/voting/submission/:position"
        component={VotingSubmitPosition}
      />
      <Route path="/voting/submission" component={VotingSubmitHome} />
    </Switch>
  );
};

export default VoteRoutes;
