import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import AllServices from './pages/AllServices';
import ServiceDetails from './pages/ServiceDetails';
import ContactUs from './pages/Contact/Contactus';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Faqs from './pages/Faqs';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<AllServices/>} />
      <Route path='/servicedetails' element={<ServiceDetails/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/blogs' element={<BlogsPage/>} />
      <Route path="/blog/:url" element={<SingleBlog />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  );
}

export default App;
