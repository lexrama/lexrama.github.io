import { ThemeProvider } from "./context/ThemeContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "../src/components/Header";
import { Home } from "./pages/Home";
// import { Contact } from "./pages/Contact/Contact";
// import { Projects } from "./pages/Projects/Projects";
import { DigitalPage, FilmPage, Photography } from "./pages/Photography";

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
          <Route
            path="photos"
            element={
              <Blur>
                <Photography />
              </Blur>
            }
          />
          <Route path="photos/digital" element={<DigitalPage />} />
          <Route path="photos/film" element={<FilmPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
