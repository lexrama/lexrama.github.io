import ProfilePicture from "../../assets/gradpic.jpeg";

import Header from "../../components/Header";
import Experience from "../Experience/Experience";
import Photography from "../Photography/Photography";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import Resume from "../../assets/resume.pdf";
// import Resume from "@/assets/gradpic.jpeg";

import "./Home.scss";

export const Home = (): JSX.Element => {
  return (
    <div className="content">
      <div className="intro">
        <div className="intro__text">
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
            passionate about UI/UX design and development, ethics and diversity
            in tech, and mental health.
          </p>
        </div>
        <img
          className="intro__profile-pic"
          src={ProfilePicture}
          alt="Profile"
        />
      </div>
      <div className="resume">
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          className="resume__link"
        >
          view resume
        </a>
      </div>
      <Experience />
      <Projects />
      <Photography />
      <Contact />
    </div>
  );
};

export default { Home };
