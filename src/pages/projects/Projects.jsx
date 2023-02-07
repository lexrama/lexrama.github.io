// import React from 'react'
import ProjectCard from "../../components/project-card/ProjectCard"
import { Container, Col, Row } from "react-bootstrap"

const Projects = () => {
  return (
    <>
      <Container>
        <Row>
          <Col><ProjectCard title="Title 1" text="Project 1"/></Col>
          <Col><ProjectCard title="Title 2" text="Project 2"/></Col>
        </Row>
      </Container>
    </>
  )
}

export default Projects