import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {

    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});

    useEffect( () => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, []);

    useEffect( () => {
        if(details.length > 0) {
            const matchedDetails = details.find(detail => detail.id == id )
            setSingleDetails(matchedDetails);
        }
    }, [details]);
    

    return (
        <div className="booking">
            <div className="booking-info">
            <img src={singleDetails?.img} alt="" />
            <h2> {singleDetails?.name}</h2>
            <p>{singleDetails?.description}</p>
            <h4>Price: {singleDetails?.price}</h4>
            </div>
            
        </div>
    );
};

export default Booking;