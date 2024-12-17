import "./Header.scss";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.tsx";
import { Blur } from "../Effects.tsx";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeToggle = theme === "light" ? "☀️" : "🌙";

  return (
    <Blur className={`header ${theme}`}>
      <div className="header__title">
        <Link to="/">alexa.✨</Link>
        <button className="header__title--theme-toggle" onClick={toggleTheme}>
          {themeToggle}
        </button>
      </div>
      <div className="header__links">
        <Link to="/photos">photos</Link>
        {/* <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link> */}
      </div>
    </Blur>
  );
};
