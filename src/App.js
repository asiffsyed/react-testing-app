import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import MainPage from './Pages/MainPage';
import NotFoundPage from './Pages/NotFoundPage';
import './App.css';

function App(props) {
 return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = { LandingPage } />
        <Route exact path = '/app' component = { MainPage } />
        <Route component = { NotFoundPage } />
      </Switch>
    </div>
  );
}

export default App;
