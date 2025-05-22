import Home from '../pages/guest/Home';
import About from '../pages/guest/About';
import MainServices from '../pages/guest/Services/MainServices';
import ServiceDetail from '../pages/guest/Services/ServiceDetail';
import ContactUs from '../pages/guest/Contact';
import BlogList from '../pages/guest/Blog/BlogList';
import BlogDetail from '../pages/guest/Blog/BlogDetail';
import Faqs from '../pages/guest/FAQs';
import {Routes, Route} from 'react-router-dom';

const GuestRoutes = () => (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<MainServices/>} />
        <Route path='/servicedetails' element={<ServiceDetail/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/blogs' element={<BlogList/>} />
        <Route path="/blog/:url" element={<BlogDetail/>} />
        <Route path="/faqs" element={<Faqs/>} />
    </Routes>
);

export default GuestRoutes;
