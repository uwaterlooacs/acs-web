import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('pages/home'));
const VotePage = React.lazy(() => import('pages/voting'));

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/voting">
          <VotePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
