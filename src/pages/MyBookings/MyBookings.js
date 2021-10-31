import React, { useState, useEffect} from 'react';
import MyBooking from '../MyBooking/MyBooking';
import './MyBookings.css';

const MyBookings = () => {

    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        fetch('https://spooky-werewolf-89746.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setMyBookings(data))
    } ,[myBookings]);


    return (
        <div>
            <h2 className="p-3 bg-primary text-warning">My Booking</h2>
           <div>
           {
                    myBookings.map(mybooking => <MyBooking
                    key = {mybooking._id}
                    mybooking={mybooking}
                    ></MyBooking>)
            }
           </div>
        </div>
    );
};

export default MyBookings;