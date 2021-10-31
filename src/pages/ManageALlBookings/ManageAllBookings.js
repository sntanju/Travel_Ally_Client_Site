import React, { useState, useEffect } from 'react';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import './ManageAllBookings.css';

const ManageAllBookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    } ,[bookings]);


    return (
        <div className="bookings">

            {
                    bookings.map(booking => <ManageAllBooking
                    key = {booking._id}
                    booking={booking}
                    ></ManageAllBooking>)
            }
            
        </div>
    );
};

export default ManageAllBookings;