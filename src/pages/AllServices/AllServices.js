import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import AllService from '../AllService/AllService';
import './AllServices.css';

const AllServices = () => {
    const {loading} = useAuth();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://spooky-werewolf-89746.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[]);

    if(loading) {
        return <Spinner animation="border" varient='success' />
    }

    return (
        <div>
            <h2  className="bg-info text-danger p-3">All The Services Of Travel Ally</h2>
            <div className="all-services">
            {
                    services.map(service => <AllService
                    key = {service._id}
                    service={service}
                    ></AllService>)
            }
            </div>
            
        </div>
    );
};

export default AllServices;