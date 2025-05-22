import React from 'react';
import Navbar from '../../../components/guest/Navbar';
import AboutBanner from '../../../components/sections/guest/AboutBanner';
import Priority from '../../../components/sections/guest/Priority';
import Safety from '../../../components/sections/guest/Safety';
import Team from '../../../components/sections/guest/Team';
import Footer from '../../../components/sections/guest/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <Priority />
            <Safety />
            <Team />
            <Footer />
        </>
    );
};

export default About;
