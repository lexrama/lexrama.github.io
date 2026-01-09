import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.tsx";
import { Blur } from "../Effects.tsx";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const themeToggle = theme === "light" ? "☀️" : "🌙";

  return (
    <Blur className="bg-white dark:bg-black fixed top-0 w-full overflow-hidden z-[1000] flex items-center justify-start px-8 gap-4">
      <div className="text-5xl m-4">
        <Link to="/" className="no-underline rounded px-2 py-2">alexa.✨</Link>
        <button 
          className="bg-transparent border-none absolute right-8 cursor-pointer" 
          onClick={toggleTheme}
        >
          {themeToggle}
        </button>
      </div>
      <nav className="flex flex-row gap-4 text-2xl items-center left-0">
        <Link to="/photos" className="no-underline rounded px-2 py-2">photos</Link>
        {/* <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link> */}
      </nav>
    </Blur>
  );
};
