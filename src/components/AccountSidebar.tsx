
import React from 'react';
import { User, ShoppingBag, MapPin, CreditCard, Settings, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AccountSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AccountSidebar = ({ activeTab, setActiveTab }: AccountSidebarProps) => {
  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Order History', icon: ShoppingBag, link: '/orders' },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'wishlist', label: 'My Wishlist', icon: Heart, link: '/wishlist' },
    { id: 'preferences', label: 'Preferences', icon: Settings },
  ];

  return (
    <div className="w-full lg:w-1/4">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <nav>
          <ul className="space-y-1">
            {tabs.map((tab) => (
              <li key={tab.id}>
                {tab.link ? (
                  <Link
                    to={tab.link}
                    className={`w-full flex items-center p-3 rounded-md transition-colors hover:bg-gray-100 text-gray-700`}
                  >
                    <tab.icon className="w-5 h-5 mr-3" />
                    <span>{tab.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center p-3 rounded-md transition-colors ${
                      activeTab === tab.id
                        ? 'bg-tech-accent text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <tab.icon className="w-5 h-5 mr-3" />
                    <span>{tab.label}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AccountSidebar;
