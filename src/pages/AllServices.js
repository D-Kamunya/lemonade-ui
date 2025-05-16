import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Services from '../sections/Services/Services';
import Footer from '../sections/Footer/Footer';

const AllServices = () => {
    return (
        <>
            <Navbar />
            <Services page="True"/>
            <Footer />
        </>
    );
};

export default AllServices;
