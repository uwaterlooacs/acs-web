import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from 'pages/home';
import AddEvents from 'pages/add-events';
import Auth from 'pages/auth';
import Vote from 'pages/vote';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth">Sign up / Sign in</Link>
            </li>
            <li>
              <Link to="/add-events">Add Events</Link>
            </li>
            <li>
              <Link to="/vote">Vote</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add-events">
            <AddEvents />
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
      </div>
    </Router>
  );
};

export default App;
