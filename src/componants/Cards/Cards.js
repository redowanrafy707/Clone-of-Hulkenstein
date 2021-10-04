import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';
 
const Cards = (props) => {
    const { picture, instructor_name, course_name, subject } = props.courses
    return (
        <div>
 
 
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>Name:{instructor_name}</Card.Title>
                        <h5>Course Name:{course_name}</h5>
                        <p>Subject:{subject}</p>
                        {/* <p><small>Details:{details}</small></p> */}
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </Col>
 
 
        </div>
    );
};
 
export default Cards;

