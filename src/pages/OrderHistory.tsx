
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrderHistory from '@/components/OrderHistory';

const OrderHistoryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-tech-dark mb-8">Order History</h1>
          <OrderHistory />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;
