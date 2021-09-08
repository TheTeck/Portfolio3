import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/home">
          <div>Homepage</div>
        </Route>
        <Route exact path="/">
          <div>Backup homepage</div>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
