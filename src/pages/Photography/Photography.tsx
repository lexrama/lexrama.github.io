import { useContext } from "react";
import { ThemeContext } from "../..//context/ThemeContext";
import FlickrCard from "../../components/FlickrCard";

import "./Photography.scss";

export default function Art() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <h1>Photography 📸</h1>
      <p>click below for a portfolio of some of my best shots :)</p>
      <FlickrCard />
    </div>
  );
}
