import WorkExperienceCard from "../components/WorkExperienceCard";
import BlockPartyLogo from "../assets/blockparty.webp";
import AppleLogo from "../assets/apple.png";
import MicrosoftLogo from "../assets/msft.png";
import EllingtonLogo from "../assets/ellington.png";

import "./Experience.scss";

export default function Experience() {
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
        </ul>
      </div>
      <div className="work">
        <h1>Work Experience 👩🏾‍💻</h1>
        <div className="work__experience-cards">
          <WorkExperienceCard
            photo={BlockPartyLogo}
            company="Block Party"
            date="April - August 2023"
            description="I worked on cool things"
          />
          <WorkExperienceCard
            photo={AppleLogo}
            company="Apple"
            date="June - September 2021"
            description="I worked on cool things"
          />
          <WorkExperienceCard
            photo={MicrosoftLogo}
            company="Microsoft"
            date="June - September 2019"
            description="I worked on cool things"
          />
          <WorkExperienceCard
            photo={EllingtonLogo}
            company="Ellington"
            date="May-July 2018"
            description="I worked on cool things"
          />
        </div>
      </div>
    </div>
  );
}
