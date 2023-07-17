import './css/skeleton.css';
import './css/normalize.css'
import './css/navbar.css';
import Navbar from './NavBar'
import Home from './routes/Home'
import Resume from './routes/Resume';
import About from './routes/About';
import Projects from './routes/Projects';
import Skills from './routes/Skills';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProjectDetails from './routes/ProjectDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects/:id">
              <ProjectDetails />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;