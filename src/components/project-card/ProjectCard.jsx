// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

import './ProjectCard.css'

const ProjectCard = (props) => {
	return (
		<Card border="white" className="project-card" style={{ width: '18rem' }}>
			{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default ProjectCard;