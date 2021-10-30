import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Booking.css';

const Booking = () => {
    const {users} = useAuth();
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        // axios.post('http://localhost:5000/services', data)
        // .then(res => {
        //     if(res.data.insertedId) {
        //         alert('added sucessfully');
        //         reset();
        //     }
        // })
    }

    useEffect( () => {
        fetch('http://localhost:5000/services')
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
        <div>
            <div className="user-info">
            <h3>{users?.displayName}</h3>   
            <h5>{users?.email}</h5>
            </div>

            <div className="booking">
                <div className="booking-info">
                    <img src={singleDetails?.img} alt="" />
                    <h2> {singleDetails?.name}</h2>
                    <p>{singleDetails?.description}</p>
                    <h4>Price: {singleDetails?.price}</h4>
                </div>

                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} placeholder="First name" />
                    <input {...register("lastName")} placeholder="Last name" />
                    <input {...register("address")} placeholder="Address" />
                    <input type="number" {...register("phone")} placeholder="Phone" />
                        <br />
                    <input type="submit" placeholder="PlaceOrder"/>
                </form>
                </div>
            </div>

            
        </div>
    );
};

export default Booking;