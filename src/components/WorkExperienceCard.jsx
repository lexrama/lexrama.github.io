import "./WorkExperienceCard.scss";

function WorkExperienceCard({ photo, company, date, description }) {
  return (
    <div className="WorkExperienceCard">
      <div className="WorkExperienceCard__header">
        <img className="company-logo" src={photo} alt="Company Logo" />
        <div className="company-name">{company}</div>
      </div>

      <div className="WorkExperienceCard__content">
        <div className="date">{date}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default WorkExperienceCard;
