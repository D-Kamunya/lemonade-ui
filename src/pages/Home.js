import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Banner/Banner';
import Services from '../sections/Services/Services';
import Emergency from '../sections/Emergency/Emergency';
import Features from '../sections/Features/Features';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Services />
            <Emergency />
            <Features />
        </>
    );
};

export default Home;
