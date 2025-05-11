
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromoBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-tech-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
      
      {/* Decorative Circle */}
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-tech-accent/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-tech-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in order-2 md:order-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-px w-10 bg-tech-accent"></div>
              <span className="text-tech-accent text-sm font-medium">LIMITED TIME OFFER</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Save Up To 50% On Our Latest Tech Products
            </h2>
            
            <p className="text-tech-gray text-lg mb-8 max-w-xl">
              Hurry and grab our exclusive deals on premium laptops, smartphones, and gaming accessories before they're gone!
            </p>
            
            <div className="flex space-x-4 mb-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-4 w-16">
                  <span className="block text-2xl font-bold text-white">12</span>
                </div>
                <span className="text-xs text-white/70 mt-1 block">Days</span>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-4 w-16">
                  <span className="block text-2xl font-bold text-white">08</span>
                </div>
                <span className="text-xs text-white/70 mt-1 block">Hours</span>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-4 w-16">
                  <span className="block text-2xl font-bold text-white">24</span>
                </div>
                <span className="text-xs text-white/70 mt-1 block">Minutes</span>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-4 w-16">
                  <span className="block text-2xl font-bold text-white">33</span>
                </div>
                <span className="text-xs text-white/70 mt-1 block">Seconds</span>
              </div>
            </div>
            
            <Link
              to="/deals"
              className="inline-flex items-center bg-tech-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-tech-accent/90 transition-colors"
            >
              Shop Deals
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Gaming setup with RGB lighting" 
                className="rounded-lg max-w-full lg:max-w-lg h-auto shadow-2xl"
              />
              
              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-tech-accent flex items-center justify-center">
                    <span className="text-lg font-bold text-white">50%</span>
                  </div>
                  <div>
                    <p className="text-xs text-tech-gray">Limited Offer</p>
                    <p className="text-tech-dark font-bold">Gaming Deals</p>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg ring-1 ring-tech-accent/30"></div>
              <div className="absolute -inset-1 bg-tech-accent/20 rounded-lg blur-sm -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
