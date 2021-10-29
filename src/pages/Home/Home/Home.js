import React from 'react';
import Discount from '../../Discount/Discount';
import TravelAdvanture from '../../TravelAdventure/TravelAdvanture';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Services></Services>
            <Discount></Discount>
            <TravelAdvanture></TravelAdvanture>
        </div>
    );
};

export default Home;