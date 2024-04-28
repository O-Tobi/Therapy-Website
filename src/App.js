import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PatientRight from './components/Patient-right/PatientRight';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ServiceFullPage from './components/Service-fullpage/ServicesFullPage';
import Blog from './components/Blog/Blog';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServiceFullPage />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <PatientRight />
      <Footer />
    </div>
  );
}

export default App;
