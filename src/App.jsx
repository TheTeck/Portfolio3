import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import './App.scss';

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;