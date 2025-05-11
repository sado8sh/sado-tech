
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutContent from '@/components/AboutContent';
import TeamSection from '@/components/TeamSection';
import Newsletter from '@/components/Newsletter';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <AboutContent />
        <TeamSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
