import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const {loading} = useAuth();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[]);

    if(loading) {
        return <Spinner animation="border" varient='success' />
    }

    return (
        <div className="services">
             {
                    services.map(service => <Service
                    key = {service.id}
                    service={service}
                    ></Service>)
            }
            
        </div>
    );
};

export default Services;