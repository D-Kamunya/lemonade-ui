import React from 'react';
import Navbar from '../../../../components/guest/Navbar';
import Footer from '../../../../components/sections/guest/Footer';
import Gallery from '../../../../components/sections/guest/Gallery';
import ServiceBanner from '../../../../components/sections/guest/ServiceBanner';
import Symptoms from '../../../../components/sections/guest/Symptoms';
import Appointment from '../../../../components/sections/guest/Appointment';

const ServiceDetail = () => {
    return (
        <>
            <Navbar />
            <ServiceBanner />
            <Symptoms />
            <Gallery />
            <Appointment />
            <Footer />
        </>
    );
};

export default ServiceDetail;