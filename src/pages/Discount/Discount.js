import React from 'react';
import './Discount.css';

const Discount = () => {
    return (
        <div className="discount">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfrdzftxvz_RPzjWTbn0DMn_2CP0IHNrJIw&usqp=CAU" alt="" />
            </div>
            <div className="discount-text">
                <h3>Take <span>10%</span> Off On Winter Vacation</h3>
                <p>Travel Ally giving <span> 10% </span> discount on this Winter Vacation.<br/> This offer is Remaining till 31 January 2022.<br/> It was a great oppurtunity for you.<br/>So Book Now and Feel the Beauty of The worlds</p>
            </div>
        </div>
    );
};

export default Discount;