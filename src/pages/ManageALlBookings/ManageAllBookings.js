import React, { useState, useEffect } from 'react';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import './ManageAllBookings.css';

const ManageAllBookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://spooky-werewolf-89746.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    } ,[bookings]);


    return (
        <div>
                <h2 className="p-3 bg-success text-info">Booking of all the user</h2>
           <div className="bookings">
           {
                    bookings.map(booking => <ManageAllBooking
                    key = {booking._id}
                    booking={booking}
                    ></ManageAllBooking>)
            }
           </div>
            
        </div>
    );
};

export default ManageAllBookings;