// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import React from "react";

import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <Card border="black" className="project-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
