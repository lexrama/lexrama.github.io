import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.tsx";
import styles from "./Header.module.css";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeToggle = theme === "light" ? "☀️" : "🌙";

  return (
    <header
      className={`${styles.header} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.headerTitle}>
        <Link to="/">alexa.✨</Link>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {themeToggle}
        </button>
      </div>
      <nav className={styles.headerLinks}>
        <Link to="/photos">photos</Link>
        {/* <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link> */}
      </nav>
    </header>
  );
};
