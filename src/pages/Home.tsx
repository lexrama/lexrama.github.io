import ProfilePicture from "../assets/profile.jpg";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-16 mx-auto p-16 w-full max-w-[1000px]">
      <div className="flex flex-row gap-8 w-full">
        <div>
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Alexa. 💫</h1>
          <p>
            I'm a software engineer focused on building and increasing access to
            technology that amplifies human potential. I work to create
            meaningful impact by building tools that improve people's lives. I
            graduated from Stanford in{" "}
            <a
              href="https://symsys.stanford.edu/"
              rel="noreferrer"
              target="_blank"
            >
              Symbolic Systems
            </a>
            , concentrating in Human-Centered Artificial Intelligence.
          </p>
        </div>
        <img
          className="my-auto h-[300px] rounded-[25px]"
          src={ProfilePicture}
          alt="Profile"
        />
      </div>
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};
