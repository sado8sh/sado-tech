
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HelpCenterHero from '@/components/HelpCenterHero';
import HelpCenterCategories from '@/components/HelpCenterCategories';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import ContactSupport from '@/components/ContactSupport';

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HelpCenterHero />
        <HelpCenterCategories />
        <FrequentlyAskedQuestions />
        <ContactSupport />
      </main>
      <Footer />
    </div>
  );
};

export default Support;
