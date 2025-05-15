import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Banner/Banner';
import Services from '../sections/Services/Services';
import Emergency from '../sections/Emergency/Emergency';
import Features from '../sections/Features/Features';
import Expert from '../sections/Expert/Expert';
import Testimonial from '../sections/Testimonial/Testimonial';
import Blogs from '../sections/Blogs/Blogs';
import Appointment from '../sections/Appointment/Appointment';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Services />
            <Emergency />
            <Features />
            <Expert />
            <Testimonial />
            <Blogs />
            <Appointment />
        </>
    );
};

export default Home;
