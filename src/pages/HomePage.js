// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Home/Header';
import HeroBanner from '../components/Home/HeroBanner';
import AboutSection from '../components/Home/AboutSection';
import LawsSection from '../components/Home/LawsSection';
import ReportCaseSection from '../components/Home/ReportCaseSection';
import Footer from '../components/Home/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <AboutSection />
      <ReportCaseSection />
      <LawsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
