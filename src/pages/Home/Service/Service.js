import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, description, name, img, price} = service || {};

    const history = useHistory();

    const handleDetails = (id) => {
        const uri = `/booking/${id}`;
        history.push(uri);
    }
    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="service-info">
            <h2>{name}</h2>
            <p className="p-2">{description}</p>
            <h4><b>Price: ${price}</b></h4>
            <button onClick={ () => handleDetails(id)} >Book Now</button>
            </div>
        </div>
    );
};

export default Service;