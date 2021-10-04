import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faFlag, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>

            <footer className="footer-distributed mt-5">

                <div className="footer-left">

                    <h3>Hulkenstein</h3>

                    <p className="footer-links">
                        <Link to="/home">Home</Link>

                        <Link to="/about">About</Link>

                        <Link to="/service">Service</Link>
                        <Link to="/founders">Founder</Link>


                    </p>

                    <p className="footer-company-name">Hulkenstein © 2021</p>
                </div>

                <div className="footer-center">

                    <div >
                        <FontAwesomeIcon className="icon" icon={faMapMarked} size='2x' />
                        <p className="d-inline-block"><span>11, Banani</span>Banani Dhaka</p>
                    </div>

                    <div >
                        <FontAwesomeIcon className="icon" icon={faPhone} size='2x' />
                        <p>+1.555.555.5555</p>
                    </div>

                    <div >
                        <FontAwesomeIcon className="icon" icon={faEnvelope} size='2x' />
                        <p><a href="mailto:support@company.com">hunkenstein@gmail.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About Us</span>
                        We are one of the best online educational platform in Bangladesh. We provide courses for HSC/SSC level students on an affordable price. It should be notice that our Teachers are the running students of well renowned Univarsity like DU, BUET and DMC.
                    </p>

                    <div className="footer-icons">
                        <FontAwesomeIcon className="icon" icon={faFacebook} size='3x' />
                        <FontAwesomeIcon className="icon" icon={faInstagram} size='3x' />
                        <FontAwesomeIcon className="icon" icon={faLinkedinIn} size='3x' />


                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;