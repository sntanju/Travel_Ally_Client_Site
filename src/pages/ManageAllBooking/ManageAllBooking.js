import React from 'react';
import './ManageAllBooking.css';

const ManageAllBooking = ({booking}) => {
    const {serviceName, address, price, phone} = booking || {};
    return (
        <div className="all-booking">
            <div>
            <h3>{serviceName}</h3>
            <h5>{address}</h5>
            <h5><b>Price: ${price}</b></h5>
            <h5>{phone}</h5>
            <button >Delete</button>
            </div>
        </div>
    );
};

export default ManageAllBooking;