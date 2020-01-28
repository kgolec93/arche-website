import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import Projects from './Components/Pages/Projects/Projects';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import ProjectPage from './Components/Pages/Projects/ProjectPage/ProjectPage';
import data from './Data/data';
import Offer from './Components/Pages/Offer/Offer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/offer'>
          <Offer />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/projectpage'>
        </Route>
        {data[1].projects.map((item, index) => {
          return (
            <Route key={`project-${index}-${item.name}`} path={`/projects/${item.url}`}>
              <ProjectPage data={item} />
            </Route>
          )
        })}
      </Switch>

    </div>
  );
}

export default App;
