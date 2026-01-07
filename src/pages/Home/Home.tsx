import ProfilePicture from "../../assets/profile.jpg";

import { Experience } from "../Experience/Experience";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";

import styles from "./Home.module.css";

export const Home = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <div className={styles.intro}>
        <div className={styles.introText}>
          <h1>Hi, I'm Alexa. 💫</h1>
          <p>
            I'm a software engineer focused on building and increasing access to
            technology that amplifies human potential. I work to create
            meaningful impact by building tools that improve people's lives. I
            graduated from Stanford in{" "}
            <a
              href="https://symsys.stanford.edu/"
              rel="noreferrer"
              target="_blank"
            >
              Symbolic Systems
            </a>
            , concentrating in Human-Centered Artificial Intelligence.
          </p>
        </div>
        <img className={styles.profilePic} src={ProfilePicture} alt="Profile" />
      </div>
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};
