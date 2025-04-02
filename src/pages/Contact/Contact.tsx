import { useTheme } from "../../context/ThemeContext";
import "./Contact.scss";

export const Contact = () => {
  const { theme } = useTheme();
  return (
    <div className={`Contact ${theme}`}>
      <h1>Contact 💬</h1>
      <p>Let's connect via:</p>
      <ul>
        <li>
          <a href="mailto:alexaramachandran@gmail.com">email</a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/lex-rama"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/lexrama" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/lex.rama"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};
