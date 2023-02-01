import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Resume from "../assets/resume.pdf"
// import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Alexa Ramachandran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href={Resume} target={"_blank"}>Resume</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


// // import React, { useState } from "react";
// import "./Header.css"
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