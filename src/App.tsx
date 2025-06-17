import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Nav, Navbar} from "react-bootstrap";

import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Projects from './pages/projects.tsx';
import {projectData} from "./components/projectData.ts";
import ProjectPage from "./pages/projectPage.tsx";

function App() {
  return (
      <Router>
          <Navbar className="bg-info ps-5" expand="lg" fixed="top">
                  <Navbar.Brand className={"text-success"} as={Link} to="/">Bas</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbar-nav" />
                  <Navbar.Collapse id="navbar-nav">
                      <Nav className="">
                          <Nav.Link className={"text-success"} as={Link} to="/projects">Projects</Nav.Link>
                          <Nav.Link className={"text-success"} as={Link} to="/about">About</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
          </Navbar>
          <div style={{ paddingTop: '40px'}}>
              <Routes>
                  <Route key="home" path="/" element={<Home/>} />
                  <Route key="about" path="/about" element={<About/>}/>
                  <Route key="projects" path="/projects" element={<Projects/>}/>
                  <Route key="not-found" path="*" element={<h1>404 Not Found</h1>} />

                  // Map each project to a route
                    {projectData.map((project) => (
                        <Route key={project.link} path={project.link} element={<ProjectPage project={project}></ProjectPage>} />
                    ))}
              </Routes>
          </div>
      </Router>
  )
}

export default App
