import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/Contact/ContactUs';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<ContactUs/>} />
    </Routes>
  );
}

export default App;
