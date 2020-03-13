import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Box from 'components/Box';
import Home from 'pages/home';
import Events from 'pages/events';
import Auth from 'pages/auth';
import Vote from 'pages/vote';

const App = () => {
  return (
    <Router>
      <Box>
        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/vote">
            <Vote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
