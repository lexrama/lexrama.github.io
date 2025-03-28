import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.tsx";
import { Blur } from "../Effects.tsx";

import styles from "./Header.module.css";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const themeToggle = theme === "light" ? "☀️" : "🌙";

  return (
    <Blur className={`${styles.header}`}>
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
      {/* </header> */}
    </Blur>
  );
};
