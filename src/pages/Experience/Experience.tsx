import { WorkExperienceCard } from "../../components/WorkExperienceCard";
import workExperienceData from "../../data/workExperience.json";
import classes from "../../data/classes.json";

import "./Experience.scss";

export const Experience = () => (
  <div className="Experience">
    <div className="education">
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
    <div className="work">
      <h1>Work Experience 👩🏾‍💻</h1>
      <div className="work__experience-cards">
        {[...workExperienceData.companies].map((company) => (
          <WorkExperienceCard {...company} />
        ))}
      </div>
    </div>
  </div>
);
