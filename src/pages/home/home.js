// import React from 'react'
// import Header from "../../components/Header"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

import './Home.css'

const Home = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<Image className='profile-pic' roundedCircle src={require('../../assets/gradpic.jpeg')} />
					</Col>
					{/* <Col><img src={require('../../assets/gradpic.jpeg')} alt='Graduation'></img></Col> */}
					<Col>
						<h1>Hi, I'm Alexa.</h1>
						<p>I'm a recent graduate from Stanford University asdjfksdfaghjlklhjsdkfgjlhksdfg sdlkfjgh lsdjfhgklsjdfhg lksdjfhg </p>
					</Col>
				</Row>
			</Container>
		</>

	)
}

export default Home