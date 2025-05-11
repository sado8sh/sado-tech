
import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest deals and updates.",
      });
      setEmail('');
    } else {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-tech-dark relative overflow-hidden">
      {/* Decorative Patterns */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-tech-accent/10 filter blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-tech-accent/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tech-accent/20 text-tech-accent mb-6">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-tech-gray text-lg mb-8 max-w-2xl mx-auto">
            Get the latest updates, exclusive deals, and tech news delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-tech-accent/50"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-tech-accent text-white rounded-lg font-medium hover:bg-tech-accent/90 transition-colors flex items-center justify-center"
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
          
          <p className="text-white/50 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
