import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <Link to="/"><button className="detail-btn">Go To Home</button></Link>
    </div>
    );
};

export default NotFound;