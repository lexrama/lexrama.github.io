// import React from 'react'
import ProjectCard from "../../components/project-card/ProjectCard"
import { Container, Col, Row } from "react-bootstrap"
// import Artally from "../../assets/artally.png"

const Projects = () => {
  return (
    <>
      <Container fluid="sm">
        <Row>
          <Col xs><ProjectCard
            title="artally"
            text="Project 1" />
          </Col>
          <Col xs><ProjectCard
            title="Across the Aisle"
            text="Project 2" />
          </Col>
          <Col xs><ProjectCard
            title="This website!"
            text="Made in React :)" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Projects