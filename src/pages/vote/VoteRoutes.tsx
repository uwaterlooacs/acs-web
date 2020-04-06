import React from 'react';
import { Switch, Route } from 'react-router-dom';

const VoteHome = React.lazy(() => import('./VoteHome'));
const VoteCompleteSignUp = React.lazy(() => import('./VoteCompleteSignUp'));

const VoteRoutes = () => {
  return (
    <Switch>
      <Route path="/vote/completesignup" component={VoteCompleteSignUp} />
      <Route path="/vote" component={VoteHome} />
    </Switch>
  );
};

export default VoteRoutes;
