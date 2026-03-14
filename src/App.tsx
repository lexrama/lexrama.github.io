import { ThemeProvider } from "./context/ThemeContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "../src/components/Header";
import { Home } from "./pages/Home";
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
          <Route
            path="photos/digital"
            element={
              <Blur>
                <DigitalPage />
              </Blur>
            }
          />
          <Route
            path="photos/film"
            element={
              <Blur>
                <FilmPage />
              </Blur>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
