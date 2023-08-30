import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://linkedin.com/in/lex-rama"
        rel="noreferrer"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/lexrama" rel="noreferrer" target="_blank">
        <AiFillGithub />
      </a>
    </div>
  );
}
