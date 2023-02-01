import Header from './components/Header';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Projects from './pages/projects/Projects.js';
import Experiences from './pages/experience/Experience.js';

import './App.css';

// import { About } from './pages/about/About.js'

// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <About />
      <Experiences />
      <Projects />
      {/* <Routes>
        <Route path="/about" element={<div>hi</div>} />
      </Routes> */}
      
    </>
  );
}



export default App;
