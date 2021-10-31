import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const Addservice = () => {

    const [details, setDetails] = useState([]);   
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://spooky-werewolf-89746.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId) {
                alert('Added Services Sucessfully');
                reset();
            }
        })
    }

    useEffect( () => {
        fetch('https://spooky-werewolf-89746.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, []);

    return (
        <div className="add-service">
            <h3 className="text-danger m-2 p-2">Add A Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder="Image" />
                    <input {...register("name")} placeholder="Service" />
                    <input {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                        <br />
                    <input type="submit" placeholder="Add"/>
                </form>

        </div>
    );
};

export default Addservice;