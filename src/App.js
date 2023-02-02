import Header from './components/Header';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Projects from './pages/projects/Projects.js';
import Experience from './pages/experience/Experience.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>

      
  
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Header />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Footer /> */}
    </>
  );
}



export default App;
