import React from 'react';

import './Aboutus.css';

const Aboutus = () => {

    
    return (
        <div>
            <h2 className="text-dark bg-info p-3">Know About Travel Ally</h2>
            <div className="aboutus">
            <div>
                <img src="https://therajholidays.com/wp-content/uploads/2020/11/kasmir-tourism-places_4935633-m.jpg" alt="" />
            </div>
            <div className="aboutus-text">
                <h2>Travel Ally Agency's Mission and Values</h2>
                <h4>Mission</h4>
                <p>Visiting various types of place of the world and helping people to know about the world.</p>
                <hr />
                <h4>Vision</h4>
                <p>Making people's mind knowledgeable by trevelling in the different place of world.</p>
                <hr />
                <h4>Primary value</h4>
                <p>The needs of the touristt come first.</p>
                <hr />
                <h4>Value statements</h4>
                <p>These values, which guide Travel Ally mission to this day, are an  expression of the vision and intent of our founders, the original Travel Ally Agents and the Sisters of Saint Francis.</p>
            </div>
            </div>
        </div>
    );
};

export default Aboutus;