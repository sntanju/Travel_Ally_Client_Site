import axios from 'axios';
import React, { useState, useEffect} from 'react';
import './ManageAllBooking.css';

const ManageAllBooking = ({booking}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://spooky-werewolf-89746.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);


    const {serviceName, address, price, phone} = booking || {};

        const handleDelete = id => {
            alert("Are You Confirm To Delete?");
            const url = `https://spooky-werewolf-89746.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    alert('Deleted Successfully');
                    const remaining = users.filter(booking => booking._id !== id);
                    setUsers(remaining);
                }
               
            })
        }


    return (
        <div className="all-booking">
            <div>
            <h3>{serviceName}</h3>
            <h5>{address}</h5>
            <h5><b>Price: ${price}</b></h5>
            <h5>{phone}</h5>
            <button onClick={ () => handleDelete(booking._id)} >Delete</button>
            
            </div>
        </div>
    );
};

export default ManageAllBooking;