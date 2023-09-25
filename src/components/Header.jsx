import "./Header.scss";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeToggle = theme === "light" ? "☀️" : "🌙";

  return (
    <div className={`header ${theme}`}>
      <div className="header__title">
        <a href="/">alexa.✨</a>
        <button className="header__title--theme-toggle" onClick={toggleTheme}>
          {themeToggle}
        </button>
      </div>
    </div>
  );
}
