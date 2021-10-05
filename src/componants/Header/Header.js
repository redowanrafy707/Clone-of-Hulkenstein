import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {


    return (

        <div>

            <Navbar collapseOnSelect expand="lg" className="bg" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <NavLink to="/home"><img src="/nav.png" alt="" width="280px" /></NavLink>
                        </Nav>
                        
                        <Nav className="ms-auto">

                            <NavLink to="/home" className="p-1 text-dark "
                                style={{
                                    textDecoration: 'none'
                                }} activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Home</NavLink>
                            <NavLink to="/about"
                                className="p-1 text-dark "
                                style={{
                                    textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>About</NavLink>
                            <NavLink to="/service"
                                className="p-1 text-dark "
                                style={{
                                    textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Service</NavLink>
                            <NavLink to="/founders"
                                className="p-1 text-dark "
                                style={{
                                    textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Founders</NavLink>




                        </Nav>
                        <Nav>



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>




    );
};

export default Header;







