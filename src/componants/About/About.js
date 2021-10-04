import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './About.css'
import { Button } from 'react-bootstrap';

const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('/teacher_details.json')
            .then(res => res.json())
            .then(data => setAbout(data))

    }, [])
    return (


        <div className="about-container mt-2">
            <div className="">
                <div>
                    <h1>About us</h1>
                    <p className="">We are one of the best online educational platform in Bangladesh. We provide courses for HSC/SSC level students on an affordable price. It should be notice that our Teachers are the running students of well renowned Univarsity like DU, BUET and DMC.
                    </p>
                </div>
            </div>
            <div><h3 className="mentorsLine mt-5">Here are some of our Mentors</h3></div>
            <div className="row">
                {
                    about.map((teacher) => (
                        <div className="col-md-4 pb-2 mt-3">
                            <div className="cart">
                                <div className="logo-image">
                                    <img className="w-50" src={teacher.picture} alt="" />
                                </div>
                                <h4 className=
                                    "mt-4">Name:{teacher.name}</h4>

                                <p>Institution: {teacher.institution}</p>
                                <p>Subject:{teacher.subject}</p>
                                <p>Batch - 2018</p>
                                <Button className="mt-4" variant="warning" >Learn More</Button>
                            </div>
                        </div>

                    ))}
            </div>
        </div>

    );
};

export default About;

