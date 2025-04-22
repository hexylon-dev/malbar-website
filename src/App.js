import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './components/Headers';
import Footer from './components/Footer';

// Import pages
import Home from './components/Home/Home';
import About from './components/about/About';
import ResidentialArea from './components/residential-area/ResidentialArea';
// import Page from './components/S1/page';
import Services from './components/Service/service';
import Residential from './components/residential/Residential';
import MalbarGold from './components/malbar-gold/Malbar-gold.jsx';
// import Suburban from './components/suburban/Suburban';
import Contact from './components/Home/Contact';
import Savitamalbar from './components/malbar-royal/Malbar-royal.jsx';
import Malbarhills from './components/malbar-hill/Malbar-hill.jsx';
import Malbarprime from './components/malbar-prime/Malbar-prime.jsx';
import PetrolPumpUI from "./components/Service/petrolpump/Petrolpump.jsx"
import BricksShowcase from './components/Service/Bricks/Bricks.jsx';
import MalbarprimeResidnatil from './components/malbar-prime/malbar-prme-residatial.jsx';

// import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/residential-area" element={<ResidentialArea />} />
          {/* <Route path="/page" element={<Page />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/Surya-kiran-bungalows" element={<Residential />} />
          <Route path="/Malbar-gold" element={<MalbarGold />} />
          {/* <Route path="/suburban" element={<Suburban />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/malbar-royal" element={<Savitamalbar />} />
          <Route path="/Malbar-hills" element={<Malbarhills />} />
          <Route path="/Malbar-Prime" element={<Malbarprime />} />
          <Route path="/petrolpump" element={<PetrolPumpUI />} />
          <Route path="/BricksShowcase" element={<BricksShowcase />} />
          <Route path="/malbar-prime-residential" element={<MalbarprimeResidnatil />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;