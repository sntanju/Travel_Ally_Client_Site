import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {

        const cellIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />  
        const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
        const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
        const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
        const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
        const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
         


    return (
        <div className="footer">

                <div className="ms-4">
                    <br />
                    <h3>Travel Ally</h3> 
                    <hr />
                    <p>We create possibilities for the <br/>people who wants to enjoy the<br/> beauty of the world.</p>             
                </div>

                <div>
                    <br />
                    <h3>Follow</h3>
                    <hr />
                    <p> {facebookIcon} Fecebook</p>
                    <p> {twitterIcon} Twitter</p>
                    <p> {instagramIcon} Instagram</p>
                    <p> {linkedinIcon} LinkedIn</p>
                </div>

                <div>
                    <br />
                    <h3>Explore</h3>
                    <hr />
                    <p>Home</p>
                    <p>About</p>
                    <p>Blogs</p>
                    <p>Services</p>
                </div>

                <div>
                    <br />
                    <h3>Contact</h3>
                    <hr />
                    <p>{cellIcon}  Cell: +543857935</p>
                    <p>{emailIcon}  Mail: TAlly@abc.com</p>  
                </div>

                <div>
                    <br />
                    <h3>Legal</h3>
                    <hr />
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Policy</p>
                </div>

                <div>
                    <br />
                    <h3>Visit</h3>
                    <hr />
                    <p>Travel Elly Co. California</p>
                    <p>34 Tesla, Ste 100 <br /> Irvine, a, USA 92618</p>
                     
                </div>

                <p  className="footer-text">Copyright &copy; 2021 Travel Ally</p>

        </div>
    );
};

export default Footer;