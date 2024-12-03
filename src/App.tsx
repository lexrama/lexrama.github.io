// import Home from "./pages/Home/Home.js";
import Home from "./pages/Home/Home";
import Photography from "./pages/Photography/Photography";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../src/components/Header";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={`${theme}`}>
        <Router basename={`/${process.env.PUBLIC_URL}`}>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="photos" element={<Photography />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
