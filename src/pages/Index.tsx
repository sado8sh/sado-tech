
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromoBanner from '@/components/PromoBanner';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <PromoBanner />
        <Testimonials />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
