
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ShoppingBag, CreditCard, Truck, Package, Settings } from 'lucide-react';

const categories = [
  {
    icon: MessageSquare,
    title: 'General Inquiries',
    description: 'Basic information about our products and services',
    link: '/support/general'
  },
  {
    icon: ShoppingBag,
    title: 'Orders & Purchases',
    description: 'Information about placing orders and making purchases',
    link: '/support/orders'
  },
  {
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'Tracking shipments and delivery information',
    link: '/support/shipping'
  },
  {
    icon: Package,
    title: 'Returns & Refunds',
    description: 'How to return products and get refunds',
    link: '/support/returns'
  },
  {
    icon: CreditCard,
    title: 'Payment Methods',
    description: 'Information about payment options and billing',
    link: '/support/payment'
  },
  {
    icon: Settings,
    title: 'Technical Support',
    description: 'Help with technical issues and product setup',
    link: '/support/technical'
  }
];

const HelpCenterCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-tech-dark text-center mb-12">
          Browse Help Categories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.link}
              className="flex flex-col items-center text-center p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100 hover:border-gray-200"
            >
              <div className="w-14 h-14 rounded-full bg-tech-accent/10 flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-tech-accent" />
              </div>
              <h3 className="text-xl font-semibold text-tech-dark mb-2">{category.title}</h3>
              <p className="text-tech-gray">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpCenterCategories;
