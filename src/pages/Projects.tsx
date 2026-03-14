import { FadeIn, GlowCard } from "../Effects";

const projects = [
  {
    name: "Artally",
    description:
      "Art feedback community platform, created for Stanford HCI course. Responsible for need-finding, UI/UX design, and cross-platform development.",
    link: "https://hci.stanford.edu/courses/cs147/2021/wi/projects/ArtsandCulture/Artally/",
    tags: ["React Native", "UI/UX", "HCI"],
  },
  {
    name: "Across the Aisle",
    description:
      "Political bias detector extension for news articles using text sentiment analysis. Responsible for concept, UI/UX design, and front-end development.",
    tags: ["Chrome Extension", "NLP", "UI/UX"],
  },
  {
    name: "Thermal Camera Library",
    description:
      "Designed library for a thermal camera on Raspberry Pi including graphics, image capture, and storage.",
    tags: ["C", "Raspberry Pi", "CS 107E"],
  },
  {
    name: "printf",
    description:
      "Implemented printf function in C, including parsing and formatting.",
    tags: ["C", "Systems", "CS 107E"],
  },
];

export const Projects = () => (
  <div>
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-3xl font-bold tracking-tight whitespace-nowrap m-0">
        Projects
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <FadeIn key={project.name} delay={i * 0.08}>
          <GlowCard
            className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/[0.04] h-full"
            glowColor="rgba(244, 63, 94, 0.1)"
          >
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-semibold text-lg m-0">{project.name}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-violet-600 dark:text-violet-400 hover:underline no-underline flex-shrink-0 ml-3"
                  >
                    View →
                  </a>
                )}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlowCard>
        </FadeIn>
      ))}
    </div>
  </div>
);
