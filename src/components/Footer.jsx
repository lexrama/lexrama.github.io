import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <Navbar fixed="bottom" bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Alexa Ramachandran</Navbar.Brand> */}
        <Nav>
          <Nav.Link
            href="https://linkedin.com/in/lex-rama"
            className="socials"
            target="blank"
          >
            <AiFillLinkedin />
          </Nav.Link>
          <Nav.Link
            href="https://github.com/lexrama"
            className="socials"
            target="blank"
          >
            <AiFillGithub />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
