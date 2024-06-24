import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PatientRight from './components/Patient-right/PatientRight';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ServiceFullPage from './components/Service-fullpage/ServicesFullPage';
import Contact from './components/Contact/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServiceFullPage />} />
        <Route path="contact" element= {<Contact />} />
      </Routes>
      <PatientRight />
      <Footer />
    </div>
  );
}
/* create a reuseable hero component thatn will work for about, blog and services */

export default App;
