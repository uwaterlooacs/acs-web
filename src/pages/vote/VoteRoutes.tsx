import React from 'react';
import { Switch, Route } from 'react-router-dom';

const VoteHome = React.lazy(() => import('./VoteHome'));

const VoteRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={VoteHome} />
    </Switch>
  );
};

export default VoteRoutes;
