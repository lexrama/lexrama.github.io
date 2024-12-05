import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Contact.scss";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`Contact ${theme}`}>
      <h1>Contact 💬</h1>
      <p>Let's connect via:</p>
      <ul>
        <li>
          <a href="mailto:alexarama@alumni.stanford.edu">email</a>
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
      </ul>
    </div>
  );
}
