import FlickrCard from "../../components/FlickrCard";

import styles from "./Photography.module.css";

export const Photography = () => {
  return (
    <div className={styles.content}>
      <h1>Photography 📸</h1>
      <p>click below for a portfolio of some of my best shots :)</p>
      <FlickrCard />
    </div>
  );
};
