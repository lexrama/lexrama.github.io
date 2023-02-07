import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

function Footer() {
	return (
		<Navbar fixed='bottom' bg="light" expand="lg">
			<Container>
				{/* <Navbar.Brand href="#home">Alexa Ramachandran</Navbar.Brand> */}
				{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						{/* <Nav.Link href="#home">About</Nav.Link> */}
						<Nav.Link href='https://linkedin.com/in/lex-rama' className='socials' target='blank'><AiFillLinkedin /></Nav.Link>
						<Nav.Link href='https://github.com/lexrama' className='socials' target='blank'><AiFillGithub /></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Footer