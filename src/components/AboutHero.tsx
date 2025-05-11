
import React from 'react';
import { Button } from '@/components/ui/button';
import { CircleDashed, Monitor } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-tech-dark text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10"></div>
      
      {/* Decorative Circles */}
      <div className="absolute -right-64 -top-64 w-[40rem] h-[40rem] bg-tech-accent/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-32 -bottom-32 w-[30rem] h-[30rem] bg-tech-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-fade-in">
            <CircleDashed className="w-5 h-5 text-tech-accent mr-2" />
            <span className="text-white text-sm font-medium">Our Story</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Innovating the Way You <span className="text-tech-accent">Experience Technology</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Founded in 2015, TechPulse has grown from a small startup to a leading tech
            retailer with a mission to make cutting-edge technology accessible to everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-tech-accent hover:bg-tech-accent/90 text-white">
              Our Products
            </Button>
            
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Monitor className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
