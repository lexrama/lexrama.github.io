// import Home from "./pages/Home/Home.js";
import Home from "./pages/Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <Home />
    </div>
  );
}
