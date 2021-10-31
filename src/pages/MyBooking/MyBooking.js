import React, { useState, useEffect} from 'react';
import useFirebase from '../../hooks/useFirebase';
import './MyBooking.css';

const MyBooking = ({mybooking}) => {

    const { users } = useFirebase();
  const [myBookings, setMyBookings] = useState([]);
  const [myBooking, setMyBooking] = useState([]);
  
  useEffect(() => {
    fetch(`https://spooky-werewolf-89746.herokuapp.com/mybookings/${users?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
  }, [users.email]);


  const {serviceName, address, price, phone} = mybooking || {};

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
                    const remaining = myBookings.filter(mybooking => mybooking._id !== id);
                    setMyBookings(remaining);
                }
               
            })
        }


    return (
        <div className="my-booking">
            <div>
            <h3>{serviceName}</h3>
            <h5>{address}</h5>
            <h5><b>Price: ${price}</b></h5>
            <h5>{phone}</h5>
            <button onClick={ () => handleDelete(mybooking._id)} >Delete</button>
            
            </div>
        </div>
    );
};

export default MyBooking;