import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import PuzzlePage from './Pages/PuzzlePage/PuzzlePage';
import MusicPage from './Pages/MusicPage/MusicPage';
import './App.scss';

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/puzzle">
          <PuzzlePage />
        </Route>
        <Route exact path="/music">
          <MusicPage />
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
