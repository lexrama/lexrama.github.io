import { useContext } from "react";
import "./Projects.scss";
import { ThemeContext } from "../../context/ThemeContext";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`Projects ${theme}`}>
      <h1>Projects 📦</h1>
      <ul>
        <li>
          <a
            href="https://hci.stanford.edu/courses/cs147/2021/wi/projects/ArtsandCulture/Artally/"
            target="_blank"
            rel="noreferrer"
          >
            <b>Artally</b>:
          </a>{" "}
          Art feedback community platform, created for Stanford HCI course.
          Responsible for need-finding, UI/UX design, and cross-platform
          development
        </li>
        <li>
          <b>Across the Aisle</b>: Political bias detector extension for news
          articles using text sentiment analysis. Responsible for concept, UI/UX
          design, and front-end development
        </li>
        <li>
          <b>Thermal Camera Library</b>: Designed library for a thermal camera
          on Raspberry Pi including graphics, image capture, and storage.
          Associated with Stanford CS 107E course
        </li>
        <li>
          <b>printf</b>: Implemented printf function in C, including parsing and
          formatting. Associated with Stanford CS 107E course
        </li>
      </ul>
    </div>
  );
};
