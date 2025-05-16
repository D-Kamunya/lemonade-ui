import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/Contact/Contactus';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/blogs' element={<BlogsPage/>} />
      <Route path="/blog/:url" element={<SingleBlog />} />
    </Routes>
  );
}

export default App;
