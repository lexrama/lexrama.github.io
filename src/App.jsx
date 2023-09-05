import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Art from "./pages/Art";
import Projects from "./pages/Projects";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

export default function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/art" element={<Art />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
