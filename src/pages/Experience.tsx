import { WorkExperienceCard } from "../components/WorkExperienceCard";
import workExperienceData from "../data/workExperience.json";
import classes from "../data/classes.json";

export const Experience = () => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Work Experience 👩🏾‍💻</h1>
      <div className="flex flex-row flex-wrap gap-4 justify-left">
        {[...workExperienceData.companies].map((company) => (
          <WorkExperienceCard {...company} />
        ))}
      </div>
    </div>
    <div>
      <h1 className="text-2xl font-bold mb-4">Education 🎓</h1>
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
  </div>
);
