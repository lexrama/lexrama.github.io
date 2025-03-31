import { WorkExperienceCard } from "../../components/WorkExperienceCard";
import workExperienceData from "../../data/workExperience.json";
import classes from "../../data/classes.json";

import styles from "./Experience.module.css";

export const Experience = () => (
  <div className={styles.Experience}>
    <div className={styles.education}>
      <h1>Education 🎓</h1>
      <p>
        <strong>Stanford University, class of 2022</strong> <br /> B.S. Symbolic
        Systems, Human-Centered Artificial Intelligence
      </p>
      <p>Selected coursework:</p>
      <ul>
        {classes.map((course) => (
          <li>{course}</li>
        ))}
      </ul>
    </div>
    <div className={styles.work}>
      <h1>Work Experience 👩🏾‍💻</h1>
      <div className={styles.experienceCards}>
        {[...workExperienceData.companies].map((company) => (
          <WorkExperienceCard {...company} />
        ))}
      </div>
    </div>
  </div>
);
