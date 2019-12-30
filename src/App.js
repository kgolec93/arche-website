import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';
import Header from './Components/Header/Header'
import { LandingPage } from './Components/Pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
          </Switch>
        </main>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
