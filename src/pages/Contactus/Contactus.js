import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhoneSquareAlt, faEnvelopeOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import './Contactus.css';

const Contactus = () => {

    const cellIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
    
    const homeIcon = <FontAwesomeIcon icon={faHome} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const instaIcon = <FontAwesomeIcon icon={faInstagramSquare} />


    return (
        <div className="contact">
            <div className="contact-us">
                <br />
                <h3> <small>{homeIcon}</small> Our Address</h3><br />
                <p>Travel Elly Co. California, USA</p>
                <p>Cell: {cellIcon} +543857935</p>
                <p>Mail: {emailIcon}TAlly@abc.com</p>
                <br />
            </div>

            <div>
                <br />
                <h3>Follow Us</h3>
                <p><b>Visit our social network channels and follow us <br/> to now our latest news </b></p>
                <p>{facebookIcon} fb.com/TAlly</p>
                <p>{twitterIcon} twitter.com/TAlly</p>
                <p>{instaIcon} instagram.com/TALLy</p>
            </div>
        </div>
    );
};

export default Contactus;