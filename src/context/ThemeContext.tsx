// context/ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  // useLayoutEffect,
} from "react";

// Create the context
const ThemeContext = createContext<
  { theme: string; toggleTheme: () => void } | undefined
>(undefined);

// Create the provider
export const ThemeProvider = ({ children }) => {
  const isStoredDarkMode = localStorage.getItem("darkMode");
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedVal =
    isStoredDarkMode === "true" ? "dark" : prefersDarkMode ? "dark" : "light";

  const [theme, setTheme] = useState(storedVal);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    localStorage.setItem("darkMode", newTheme === "dark" ? "true" : "false");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
