import React from 'react';
import Navbar from '../../../../components/guest/Navbar';
import Services from '../../../../components/sections/guest/Services';
import Footer from '../../../../components/sections/guest/Footer';

const MainServices = () => {
    return (
        <>
            <Navbar />
            <Services page="True"/>
            <Footer />
        </>
    );
};

export default MainServices;
