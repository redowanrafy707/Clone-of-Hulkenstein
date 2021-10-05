import React from 'react';
import "./Home.css";
import { useEffect, useState } from 'react';
import { Button, Row, img } from 'react-bootstrap';

import Cards from '../Cards/Cards';
import { Link } from "react-router-dom";
import SecondSection from '../SecondSection/SecondSection';
import FirstSection from '../FirstSection/FirstSection';


const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/course_data_api.json')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 4)))
    }, [])
    return (
        <div>
            <img src="./wallpaper.jpg" alt="" className="imgs"></img>
            {/* <FirstSection></FirstSection> */}
            {/* <SecondSection ></SecondSection> */}
            <h1>Our <span className="Latest"> Latest</span> Courses</h1>
            <div className="container ">

                <Row xs={3} md={4} className="g-4 mt-4">
                    {
                        courses.map(course => <Cards courses={course}>
                        </Cards>)
                    }
                </Row>
            </div >
            <Link to="/service">
                <Button variant="warning" ClassName="mb-5" >
                     See more
                </Button>
            </Link>
            </div>
        
    );
};

export default Home;