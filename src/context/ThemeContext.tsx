import { createContext, useLayoutEffect, useState } from "react";

import consts from "../consts/consts.scss";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    document.body.style.backgroundColor =
      theme === "light" ? consts.darkBackground : consts.lightBackground;
    setTheme(theme === "light" ? "dark" : "light");
  };

  useLayoutEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.style.backgroundColor = consts.darkBackground;
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
