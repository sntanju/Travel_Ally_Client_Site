import { faAccusoft, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faFire, faMap, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TravelAdvanture.css';

const TravelAdvanture = () => {

        const campfireIcon = <FontAwesomeIcon icon={faFire} />  
        const adventureIcon = <FontAwesomeIcon icon={faAccusoft} />
        const offroadIcon = <FontAwesomeIcon icon={faMapSigns} />
        const exploringIcon = <FontAwesomeIcon icon={faMap} />

    return (
        <div className="adventures" >

            <h1>Adventure & Activitiy</h1>
            <p> <b>In our tour we have make different type of exaiting activity like making aventers, <br/> going with some interesting off road, make camp and burn fire,<br/> team walking, playing, photographing etc.</b></p>

            <div  className="adventure">
                
                <div className="single-adventure">
                    <p>{adventureIcon}</p>
                    <h4>Adventure</h4>
                    <h5>15 Destination</h5>
                </div>
                <div className="single-adventure">
                    <p>{campfireIcon}</p>
                    <h4>Camp Fire</h4>
                    <h5>13 Destination</h5>
                </div>
                <div className="single-adventure">
                    <p>{offroadIcon}</p>
                    <h4>Off Road</h4>
                    <h5>10 Destination</h5>
                </div>
                <div className="single-adventure">
                    <p>{exploringIcon}</p>
                    <h4>Exploring</h4>
                    <h5>12 Destination</h5>
                </div>
                
            </div>
        </div>
    );
};

export default TravelAdvanture;