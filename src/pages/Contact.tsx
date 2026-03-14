import { FiMail, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { GlowCard } from "../Effects";

const socials = [
  {
    icon: FiMail,
    label: "Email",
    href: "mailto:alexaramachandran@gmail.com",
    hoverColor: "group-hover:text-rose-500",
    glow: "rgba(244, 63, 94, 0.1)",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/lex-rama",
    hoverColor: "group-hover:text-blue-500",
    glow: "rgba(59, 130, 246, 0.1)",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/lexrama",
    hoverColor: "group-hover:text-violet-500",
    glow: "rgba(139, 92, 246, 0.1)",
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    href: "https://instagram.com/lex.rama",
    hoverColor: "group-hover:text-pink-500",
    glow: "rgba(236, 72, 153, 0.1)",
  },
];

export const Contact = () => (
  <div>
    <div className="flex items-center gap-4 mb-4">
      <h2 className="text-3xl font-bold tracking-tight whitespace-nowrap m-0">
        Get in Touch
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
    </div>
    <p className="text-slate-600 dark:text-slate-400 mb-8 m-0 mt-2">
      Always open to interesting conversations and opportunities.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {socials.map(({ icon: Icon, label, href, hoverColor, glow }) => (
        <GlowCard
          key={label}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50"
          glowColor={glow}
        >
          <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noreferrer"}
            className="flex flex-col items-center gap-3 p-6 no-underline"
          >
            <Icon
              size={28}
              className={`text-slate-400 transition-colors duration-300 ${hoverColor}`}
            />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {label}
            </span>
          </a>
        </GlowCard>
      ))}
    </div>
  </div>
);
