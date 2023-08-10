import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function HeaderSocials() {
  return (
    <div>
      <a
        href="https://linkedin.com/in/lex-rama"
        className="socials"
        target="blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/lexrama" className="socials" target="blank">
        <AiFillGithub />
      </a>
    </div>
  );
}
