import "./WorkExperienceCard.scss";

function WorkExperienceCard({ photo, name, date, role, description }) {
  const descriptionList = description.map((item) => <li>{item}</li>);

  return (
    <div className="WorkExperienceCard">
      <div className="WorkExperienceCard__header">
        <img className="company-logo" src={photo} alt="Company Logo" />
        <div className="company-name">{name}</div>
      </div>

      <div className="WorkExperienceCard__content">
        <div className="role">
          <strong>{role}</strong>
        </div>
        <div className="date">{date}</div>
        <div className="description">{descriptionList}</div>
      </div>
    </div>
  );
}

export default WorkExperienceCard;
