import FlickrCard from "../components/FlickrCard";

import "./Art.scss";

export default function Art() {
  return (
    <div className="Art">
      <h1>Photography 📸</h1>
      <p>click below for a portfolio of some of my best shots :)</p>
      <FlickrCard />
    </div>
  );
}
