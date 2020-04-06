import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('pages/home'));
const VotePage = React.lazy(() => import('pages/vote'));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/vote">
          <VotePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
