
import React from 'react';
import { BadgePercent, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DealHero = () => {
  return (
    <section className="py-16 md:py-24 bg-tech-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -right-64 -top-64 w-[40rem] h-[40rem] bg-tech-accent/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-32 -bottom-32 w-[30rem] h-[30rem] bg-tech-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-fade-in">
            <BadgePercent className="w-5 h-5 text-tech-accent mr-2" />
            <span className="text-white text-sm font-medium">Limited Time Offers</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Exclusive Tech Deals <span className="text-tech-accent">Just For You</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover incredible savings on premium tech products with our limited-time deals. Up to 70% off on selected items.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
            <Button size="lg" className="bg-tech-accent hover:bg-tech-accent/90 text-white">
              Shop All Deals
            </Button>
            
            <div className="flex items-center text-white">
              <Clock className="w-5 h-5 mr-2 text-tech-accent" />
              <span>New deals every 24 hours</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["Laptops", "Smartphones", "Audio", "Gaming"].map((category) => (
              <div key={category} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-fade-in">
                <p className="text-white font-medium">{category} Deals</p>
                <p className="text-tech-accent text-sm">Up to 50% off</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealHero;
