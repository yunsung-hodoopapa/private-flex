import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import SkillsPage from './pages/Skills';
import PositionPage from './pages/Position';
import SummaryPage from './pages/Summary';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/skills">
          <SkillsPage />
        </Route>
        <Route path="/position">
          <PositionPage />
        </Route>
        <Route path="/summary">
          <SummaryPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
