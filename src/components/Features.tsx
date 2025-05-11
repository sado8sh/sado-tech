
import React from 'react';
import { Truck, Shield, RotateCcw, Clock, CreditCard, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "Free shipping on all orders over $99"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payment",
      description: "100% secure payment processing"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "30-day money back guarantee"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated support anytime"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Flexible Payment",
      description: "Multiple payment options"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Technical Help",
      description: "Expert tech assistance"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100 hover:border-tech-accent/20 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-tech-dark font-medium mb-2">{feature.title}</h3>
              <p className="text-tech-gray text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
