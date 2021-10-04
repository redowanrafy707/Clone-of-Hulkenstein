import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Header = () => {


    return (

        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand className="p-2 mb-3 mt-3 " href="#home">Hulkenstein</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Navbar.Brand  href="/home"><img src="/nav.png" alt="" /></Navbar.Brand>
                        </Nav>
                        <Nav className="me-auto">

                            <NavLink to="/home" className="p-2  "
                                style={{
                                    textDecoration: 'none'
                                }} activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Home</NavLink>
                            <NavLink to="/about"
                                className="p-2  "
                                style={{
                                    textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>About</NavLink>
                            <NavLink to="/service"
                                className="p-2  "
                                style={{
                                    textDecoration: 'none'
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Service</NavLink>
                            <NavLink to="/founders"
                                className="p-2  "
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







