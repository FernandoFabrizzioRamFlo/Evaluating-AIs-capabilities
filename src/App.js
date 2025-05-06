import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FleetSection from './components/FleetSection';
import BenefitsSection from './components/BenefitsSection';
import CoverageSection from './components/CoverageSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header/>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FleetSection />
      <BenefitsSection />
      <CoverageSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

// DONE