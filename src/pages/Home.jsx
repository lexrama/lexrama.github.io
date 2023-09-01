import Header from "../components/Header";
import Footer from "../components/Footer";
import FlickrCard from "../components/FlickrCard";

import ProfilePicture from "../assets/gradpic.jpeg";

import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <div className="intro">
        <h1>Hi, I'm Alexa. (she/her)</h1>
        <p>
          I'm a recent graduate from Stanford University in{" "}
          <a
            href="https://symsys.stanford.edu/"
            rel="noreferrer"
            target="_blank"
          >
            Symbolic Systems
          </a>
          , concentrating in Human-Centered Artificial Intelligence. I'm
          passionate about UI/UX design and development, ethics and diversity in
          tech, and mental health.
        </p>
      </div>
      <img className="profile-pic" src={ProfilePicture} alt="Profile" />
    </div>
  );
}
