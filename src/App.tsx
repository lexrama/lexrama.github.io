import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

import { ThemeProvider } from "./context/ThemeContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "../src/components/Header";
import { Home } from "./pages/Home/Home";
// import { Contact } from "./pages/Contact/Contact";
// import { Projects } from "./pages/Projects/Projects";
import { Photography } from "./pages/Photography/Photography";

import { Blur } from "./Effects";

export default function App() {
  return (
    <ThemeProvider>
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <Header />
        <Routes>
          <Route
            path=""
            element={
              <Blur>
                <Home />
              </Blur>
            }
          />
          {/* <Route
              path="contact"
              element={
                <Blur>
                  <Contact />
                </Blur>
              }
            />
            <Route
              path="projects"
              element={
                <Blur>
                  <Projects />
                </Blur>
              }
            /> */}
          <Route
            path="photos"
            element={
              <Blur>
                <Photography />
              </Blur>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
