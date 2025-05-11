
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccountSidebar from '@/components/AccountSidebar';
import ProfileSettings from '@/components/ProfileSettings';
import OrderHistory from '@/components/OrderHistory';
import AddressList from '@/components/AddressList';
import PaymentMethods from '@/components/PaymentMethods';
import Preferences from '@/components/Preferences';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Function to render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'orders':
        return <OrderHistory />;
      case 'addresses':
        return <AddressList />;
      case 'payment':
        return <PaymentMethods />;
      case 'preferences':
        return <Preferences />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-tech-dark mb-8">My Account</h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-sm p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
