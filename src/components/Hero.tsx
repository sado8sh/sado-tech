
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-tech-dark min-h-[90vh] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=2339&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-tech-dark via-tech-dark/95 to-tech-navy"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tech-accent/10 text-tech-accent text-sm font-medium mb-6">
              <span className="animate-pulse mr-1">●</span> New Collection 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Cutting-Edge <span className="text-tech-accent">Technology</span> For Modern Life
            </h1>
            <p className="text-tech-gray text-lg mb-8 max-w-xl">
              Discover our premium selection of laptops, smartphones, and smart devices designed for performance, reliability, and style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-tech-primary group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-tech-secondary">
                Browse Categories
              </Button>
            </div>
            
            {/* Brands */}
            <div className="mt-12">
              <p className="text-tech-gray text-sm mb-4">TRUSTED BY LEADING BRANDS</p>
              <div className="flex flex-wrap items-center gap-8 opacity-70">
                <img src="https://cdn.worldvectorlogo.com/logos/apple-13.svg" alt="Apple" className="h-6 invert" />
                <img src="https://cdn.worldvectorlogo.com/logos/samsung-4.svg" alt="Samsung" className="h-6 invert" />
                <img src="https://cdn.worldvectorlogo.com/logos/dell-2.svg" alt="Dell" className="h-8 invert" />
                <img src="https://cdn.worldvectorlogo.com/logos/intel-2.svg" alt="Intel" className="h-6 invert" />
                <img src="https://cdn.worldvectorlogo.com/logos/sony-2.svg" alt="Sony" className="h-6 invert" />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative group">
              {/* Laptop Image */}
              <div className="animate-float transform">
                <img 
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Modern Laptop" 
                  className="rounded-xl shadow-2xl max-w-full lg:max-w-md relative z-20"
                />
              </div>
              
              {/* Glowing effect */}
              <div className="absolute -inset-4 rounded-full bg-tech-accent/20 filter blur-xl opacity-70 animate-pulse-glow"></div>
              
              {/* Decorative rings */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-tech-accent to-tech-accent/0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Specs floating box */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4 animate-slide-in z-30">
                <div className="h-12 w-12 rounded-full bg-tech-accent/20 flex items-center justify-center text-tech-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-tech-dark">12-Core CPU</p>
                  <p className="text-xs text-tech-gray">Ultra-Fast Processing</p>
                </div>
              </div>
              
              {/* Second floating box */}
              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg z-30 animate-slide-in">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-tech-accent/20 flex items-center justify-center text-tech-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-tech-dark">4.9/5.0 Rating</p>
                    <div className="flex items-center text-yellow-500 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-half"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8fafc" fillOpacity="1" d="M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,90.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </section>
  );
};

export default Hero;
