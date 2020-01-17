import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import Projects from './Components/Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
