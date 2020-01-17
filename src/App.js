import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
