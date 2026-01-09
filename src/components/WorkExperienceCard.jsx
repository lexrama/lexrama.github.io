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
    <div className="relative flex flex-col p-4 border-2 border-gray-500 rounded-[15px] w-[400px]">
      <div className="relative flex gap-4 items-center text-2xl">
        <img className="max-w-[44px] max-h-[44px]" src={photoSrc} alt="Company Logo" />
        <div>{name}</div>
      </div>

      <div className="mt-2.5 relative flex flex-col gap-4">
        <div>
          <strong>{role}</strong>
        </div>
        <div className="text-sm text-gray-500">{date}</div>
        <div className="text-sm ml-2.5">{descriptionList}</div>
      </div>
    </div>
  );
};
