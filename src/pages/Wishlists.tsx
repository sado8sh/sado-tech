
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Wishlist from '@/components/Wishlist';

const Wishlists = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-tech-dark mb-8">My Wishlist</h1>
          <Wishlist />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlists;
