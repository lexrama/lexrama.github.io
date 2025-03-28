import "./WorkExperienceCard.scss";

import { useTheme } from "../context/ThemeContext";

export const WorkExperienceCard = ({
  photo,
  darkPhoto,
  name,
  date,
  role,
  description,
}) => {
  const descriptionList = description.map((item) => <li>{item}</li>);

  const { theme } = useTheme();

  const photoSrc = darkPhoto && theme === "dark" ? darkPhoto : photo;

  return (
    <div className="WorkExperienceCard">
      <div className="WorkExperienceCard__header">
        <img className="company-logo" src={photoSrc} alt="Company Logo" />
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
};
