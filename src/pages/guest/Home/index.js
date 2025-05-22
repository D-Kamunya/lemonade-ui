import React from 'react';
import Navbar from '../../../components/guest/Navbar';
import Banner from '../../../components/sections/guest/Banner';
import Services from '../../../components/sections/guest/Services';
import Emergency from '../../../components/sections/guest/Emergency';
import Features from '../../../components/sections/guest/Features';
import Expert from '../../../components/sections/guest/Expert';
import Testimonial from '../../../components/sections/guest/Testimonial';
import Blogs from '../../../components/sections/guest/Blogs';
import Appointment from '../../../components/sections/guest/Appointment';
import Footer from '../../../components/sections/guest/Footer'

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services/>
            <Emergency/>
            <Features/>
            <Expert/>
            <Testimonial/>
            <Blogs/>
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;
