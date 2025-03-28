import { useTheme } from "../..//context/ThemeContext";
import FlickrCard from "../../components/FlickrCard";

import "./Photography.scss";

export const Photography = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme}`}>
      <h1>Photography 📸</h1>
      <p>click below for a portfolio of some of my best shots :)</p>
      <FlickrCard />
    </div>
  );
};
