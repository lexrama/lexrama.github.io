import { createContext, useState } from "react";

import variables from "../consts/consts.scss";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    document.body.style.backgroundColor =
      theme === "light" ? variables.darkBackground : variables.lightBackground;
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
