import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import PuzzlePage from './Pages/PuzzlePage/PuzzlePage';
import MusicPage from './Pages/MusicPage/MusicPage';
import OurAlleyPage from './Pages/OurAlleyPage/OurAlleyPage';
import MinesweeperPage from './Pages/MinesweeperPage/MinesweeperPage';
import './App.scss';

function App() {
  return (
    <div className="app">
    <Router basename="/Portfolio3">
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
        <Route exact path="/ouralley">
          <OurAlleyPage />
        </Route>
        <Route exact path="/minesweeper">
          <MinesweeperPage />
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
