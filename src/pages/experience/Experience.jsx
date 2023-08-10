import React from "react";

import Microsoft from "../../assets/msft.png";
import BlockParty from "../../assets/blockparty.webp";
import "./Experience.css";

export default function Experience() {
  return (
    <>
      <div className="experience">
        <h1>Experience</h1>
        <img src={Microsoft} alt="Microsoft" />
        <img src={BlockParty} alt="BlockParty" />
      </div>
    </>
  );
}
