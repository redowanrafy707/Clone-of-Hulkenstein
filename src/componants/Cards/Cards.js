import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import "./Card.css"
const Cards = (props) => {
    const { picture, instructor_name, course_name, subject } = props.courses
    return (
        <div>
 
 
            <Col>
                <Card className="card" >
                    <Card.Img variant="top" src={picture} />
                    <Card.Body className="card-body">
                        <Card.Title>Name:{instructor_name}</Card.Title>
                        <h5>Course Name:{course_name}</h5>
                        <p>Subject:{subject}</p>
                        <Link to="/CourseDetails">
                        <Button variant="primary">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
 
 
        </div>
    );
};
 
export default Cards;

