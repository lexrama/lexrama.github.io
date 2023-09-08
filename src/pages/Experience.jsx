import WorkExperienceCard from "../components/WorkExperienceCard";

import workExperienceData from "../data/workExperience.json";

import "./Experience.scss";

export default function Experience() {
  const companies = [...workExperienceData.companies];
  console.log("companies", companies);
  const companyList = companies.map((company) => (
    <WorkExperienceCard {...company} />
  ));

  const stringified = JSON.stringify(workExperienceData.companies);
  console.log("stringified", stringified);
  const parsed = JSON.parse(stringified);
  console.log("parsed", parsed);

  return (
    <div className="Experience">
      <div className="education">
        <h1>Education 🎓</h1>
        <p>
          <strong>Stanford University, class of 2022</strong> <br /> B.S.
          Symbolic Systems, Human-Centered Artificial Intelligence
        </p>
        <p>Selected coursework:</p>
        <ul>
          <li>CS 147: Introduction to Human-Computer Interaction Design</li>
          <li>CS 221: Artificial Intelligence: Principles and Techniques</li>
          <li>CS 247A: Designing for Artificial Intelligence</li>
          <li>CS 161: Design and Analysis of Algorithms</li>
          <li>CS 107E: Computer Systems from the Ground Up</li>
          <li>CS 106B: Programming Abstractions</li>
          <li>CS 109: Introduction to Probability for Computer Scientists</li>
          <li>ENGLISH 106A: A.I., Art, and Activism</li>
        </ul>
      </div>
      <div className="work">
        <h1>Work Experience 👩🏾‍💻</h1>
        <div className="work__experience-cards">{companyList}</div>
      </div>
    </div>
  );
}
