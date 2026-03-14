import ProfilePicture from "../assets/profile.jpg";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { FadeIn } from "../Effects";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-500/[0.06] dark:bg-violet-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-rose-500/[0.06] dark:bg-rose-500/[0.04] blur-[120px]" />
      </div>

      <section className="min-h-[calc(100vh-4rem)] flex items-center relative">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <FadeIn
              className="flex-1 text-center md:text-left"
              direction="none"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] m-0">
                Hi, I'm Alexa.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-6 leading-relaxed max-w-xl mx-auto md:mx-0">
                Creating technology with a focus on augmenting human potential.
                Stanford{" "}
                <a
                  href="https://symsys.stanford.edu/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-violet-600 dark:text-violet-400 hover:underline"
                >
                  Symbolic Systems
                </a>{" "}
                grad in Human-Centered AI.
              </p>
              <div className="flex gap-3 mt-8 justify-center md:justify-start flex-wrap">
                <a
                  href="https://linkedin.com/in/lex-rama"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 text-sm font-medium rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors no-underline outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/lexrama"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 text-sm font-medium rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors no-underline outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950"
                >
                  GitHub
                </a>
                <a
                  href="mailto:alexaramachandran@gmail.com"
                  className="px-5 py-2.5 text-sm font-medium rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors no-underline outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950"
                >
                  Say Hello
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="none">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-500 to-rose-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
                <img
                  className="relative h-[280px] sm:h-[320px] md:h-[380px] w-auto rounded-3xl object-cover shadow-2xl"
                  src={ProfilePicture}
                  alt="Alexa Ramachandran"
                />
              </div>
            </FadeIn>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown className="text-slate-400 text-xl" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 w-full pb-32">
        <div className="flex flex-col gap-28">
          <section id="experience">
            <FadeIn>
              <Experience />
            </FadeIn>
          </section>

          <section id="projects">
            <FadeIn>
              <Projects />
            </FadeIn>
          </section>

          <section id="contact">
            <FadeIn>
              <Contact />
            </FadeIn>
          </section>
        </div>
      </div>
    </div>
  );
};
