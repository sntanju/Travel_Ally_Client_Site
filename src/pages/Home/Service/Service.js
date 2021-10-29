import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, price} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="service-info">
            <h2>{name}</h2>
            <h4><b>Price: ${price}</b></h4>
            <button >PlaceOrder</button>
            </div>
        </div>
    );
};

export default Service;