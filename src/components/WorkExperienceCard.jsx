import { useTheme } from "../context/ThemeContext";
import { GlowCard } from "../Effects";

export const WorkExperienceCard = ({
  photo,
  darkPhoto,
  name,
  date,
  role,
  team,
  description,
}) => {
  const { theme } = useTheme();
  const photoSrc = darkPhoto && theme === "dark" ? darkPhoto : photo;

  return (
    <GlowCard className="bg-white dark:bg-slate-900/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/[0.04] h-full">
      <div className="flex items-start gap-4">
        <img
          className="w-11 h-11 rounded-xl object-contain flex-shrink-0 mt-0.5"
          src={photoSrc}
          alt={`${name} logo`}
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
            <h3 className="font-semibold text-base m-0">{name}</h3>
            <span className="text-xs text-slate-500 whitespace-nowrap">
              {date}
            </span>
          </div>
          <p className="text-violet-600 dark:text-violet-400 text-sm mt-0.5 font-medium m-0">
            {role}
          </p>
          {team && (
            <p className="text-xs text-slate-500 mt-0.5 m-0">{team}</p>
          )}
          <ul className="mt-3 space-y-1.5 list-none p-0 m-0">
            {description.map((item, i) => (
              <li
                key={i}
                className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex gap-2"
              >
                <span className="text-violet-400 dark:text-violet-600 mt-[7px] flex-shrink-0">
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="currentColor"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlowCard>
  );
};
