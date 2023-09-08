import "./Header.scss";
import Resume from "../assets/resume.pdf";

export default function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <a href="/">alexa.✨</a>
      </div>
      <div className="header__links">
        <a href="/experience">experience</a>
        <a href="/projects">projects</a>
        <a href="/art">art</a>
        <a href="/contact">contact</a>
        <a href={Resume} target="_blank" rel="noreferrer">
          resume
        </a>
      </div>
    </div>
  );
}
