
import React from 'react';
import { ExternalLink, Linkedin, Mail, Twitter } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "With over 15 years in the tech industry, Sarah leads our company vision and strategy.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "A former software engineer, Michael oversees our technical operations and product selection.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "David Rodriguez",
      role: "Head of Product",
      bio: "David brings a keen eye for innovative products that align with our company mission.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Emily Patel",
      role: "Customer Experience Director",
      bio: "Emily ensures that every customer interaction with TechPulse is exceptional.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-dark mb-4">Meet Our Team</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            The passionate individuals behind TechPulse who work tirelessly to bring you the best technology products and experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-tech-dark mb-1">{member.name}</h3>
                <p className="text-tech-accent mb-3">{member.role}</p>
                <p className="text-tech-gray mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-tech-accent transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-tech-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-tech-accent transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/careers" 
            className="inline-flex items-center text-tech-accent hover:text-tech-accent/80 font-medium transition-colors"
          >
            Join our growing team
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
