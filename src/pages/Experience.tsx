import { WorkExperienceCard } from "../components/WorkExperienceCard";
import workExperienceData from "../data/workExperience.json";
import classes from "../data/classes.json";
import { FadeIn, GlowCard } from "../Effects";

export const Experience = () => (
  <div className="flex flex-col gap-16">
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight whitespace-nowrap m-0">
          Work Experience
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {workExperienceData.companies.map((company, i) => (
          <FadeIn key={company.name} delay={i * 0.08}>
            <WorkExperienceCard {...company} />
          </FadeIn>
        ))}
      </div>
    </div>

    <div>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight whitespace-nowrap m-0">
          Education
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
      </div>
      <GlowCard className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-700/50 transition-all duration-300">
        <h3 className="text-xl font-semibold m-0">Stanford University</h3>
        <p className="text-violet-600 dark:text-violet-400 text-sm mt-1 font-medium m-0">
          B.S. Symbolic Systems, Human-Centered Artificial Intelligence
        </p>
        <p className="text-slate-500 text-sm mt-0.5 m-0">Class of 2022</p>
        <div className="mt-6">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 m-0">
            Selected Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {classes.map((course) => (
              <span
                key={course}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </div>
  </div>
);
