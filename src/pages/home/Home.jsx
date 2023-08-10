// import React from 'react'
// import Header from "../../components/Header"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image
              className="profile-pic"
              roundedCircle
              src={require("../../assets/gradpic.jpeg")}
            />
          </Col>
          <Col>
            <h1>Hi, I'm Alexa.</h1>
            <p>
              I'm a recent graduate from Stanford University. More to come soon.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
