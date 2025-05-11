
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DealHero from '@/components/DealHero';
import DealsList from '@/components/DealsList';
import Newsletter from '@/components/Newsletter';

const Deals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DealHero />
        <DealsList />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
