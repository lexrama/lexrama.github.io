import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


// // import React, { useState } from "react";
// import "./Header.css"
// import Resume from "../assets/resume.pdf"
// import HeaderSocials from "./HeaderSocials"
// // import { NavLink, Link } from "react-router-dom";


// const Header = () => {
// 	return (
// 		<div>
// 			<header className="header">
// 				<ul>
// 					<li>
// 						<span className="header-button">Home</span>
// 					</li>
// 					<li>
// 						<span className="header-button">Education</span>
// 					</li>
// 					<li>
// 						<span className="header-button">Experience</span>
// 					</li>
// 					<li>
// 						<span className="header-button">Projects</span>
// 					</li>
// 					<li>
// 						<a
// 							className="header-button"
// 							href={Resume}
// 							target={"_blank"}
// 							rel='noreferrer'>
// 							Resume</a>
// 					</li>
// 				</ul>
// 				<HeaderSocials />
// 			</header>
// 		</div>
// 	)
// }

// export default Header