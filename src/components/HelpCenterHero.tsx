
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HelpCenterHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In a real implementation, this would search through help articles
  };

  return (
    <section className="bg-gradient-to-b from-tech-dark to-tech-accent py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How can we help you today?
        </h1>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Find answers to your questions with our comprehensive help center resources.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-2xl mx-auto gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-lg bg-white/95 text-tech-dark border-0 shadow-lg focus:ring-2 focus:ring-tech-accent focus:outline-none"
            />
          </div>
          <Button type="submit" className="bg-tech-accent hover:bg-tech-accent/90 text-white px-6 py-3">
            Search
          </Button>
        </form>
      </div>
    </section>
  );
};

export default HelpCenterHero;
