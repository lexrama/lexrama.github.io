import "./Header.scss";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme);
  const themeToggle = theme === "light" ? "☀️" : "🌙";

  return (
    <div className={`header ${theme}`}>
      <div className="header__title">
        <a href="/">alexa.✨</a>
        <button className="header__title--theme-toggle" onClick={toggleTheme}>
          {themeToggle}
        </button>
      </div>
      <div className="header__links">
        <a href="/photos">photos</a>
        <a href="/projects">projects</a>
        <a href="/contact">contact</a>
      </div>
    </div>
  );
}
