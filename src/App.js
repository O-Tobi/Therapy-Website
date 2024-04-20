
import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Service from './components/Company-Service/Service';
import Therapists from './components/Therapists/Therapists';
import Guide from './components/Guide/Guide';
import PatientRight from './components/Patient-right/PatientRight';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <Therapists />
      <Guide />
      <PatientRight />
      <Footer />
    </div>
  );
}

export default App;
