import React from 'react';
import SectionTitle from '../../../components/guest/SectionTitle';
import Navbar from '../../../components/guest/Navbar';
import './styles.scss';
import ContactForm from '../../../components/guest/Contact/ContactForm';
import Footer from '../../../components/sections/guest/Footer';

const ContactUs = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <SectionTitle 
                    title="Contact Us"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                />
            </section>
            <section className='contact-form-area'  data-aos="fade-up" data-aos-duration="2000">
                <ContactForm />
            </section>
            <Footer />
        </>
    );
};

export default ContactUs;
