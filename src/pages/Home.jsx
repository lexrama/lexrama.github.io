// import React from 'react'
// import Header from "../../components/Header"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import Header from "../components/Header";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>
      <Container>
        <Row>
          <Col>
            <h1>Hi, I'm Alexa.</h1>
            <p>
              I'm a recent graduate from Stanford University. More to come soon.
            </p>
          </Col>
          <Col>
            <Image
              className="profile-pic"
              roundedCircle
              src={require("../assets/gradpic.jpeg")}
            />
          </Col>
        </Row>
      </Container>
      <a
        data-flickr-embed="true"
        href="https://www.flickr.com/gp/133825690@N04/o1V00164Tp"
        title="Best Shots"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://live.staticflickr.com/7675/26497677404_93a53597bf_z.jpg"
          alt="Best Shots"
        />
      </a>
      <script
        async
        src="//embedr.flickr.com/assets/client-code.js"
        charset="utf-8"
      />
    </div>
  );
}
