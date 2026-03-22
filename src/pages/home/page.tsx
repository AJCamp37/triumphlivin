import { useState } from 'react';
import Hero from './components/Hero';
import ProgramCards from './components/ProgramCards';
import OurHomes from './components/OurHomes';
import Testimonials from './components/Testimonials';
import Mission from './components/Mission';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProgramCards />
      <OurHomes />
      <Testimonials />
      <Mission />
      <ContactSection />
      <Footer />
    </div>
  );
}