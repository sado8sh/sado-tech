
import React from 'react';
import { CheckCircle, Clock, Globe, ShieldCheck } from 'lucide-react';

const AboutContent = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Our Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-dark mb-6">Our Mission</h2>
            <p className="text-tech-gray mb-6">
              At TechPulse, we're driven by a simple yet powerful mission: to make technology accessible, 
              understandable, and beneficial for everyone. We believe that technology should enhance lives, 
              not complicate them.
            </p>
            <p className="text-tech-gray mb-8">
              We curate and offer only the highest quality tech products that we truly believe in – devices 
              and solutions that are innovative, reliable, and designed with real users in mind. Beyond just 
              selling products, we aim to educate and empower our customers to make informed decisions about 
              the technology they bring into their lives.
            </p>
            <div className="space-y-4">
              {[
                "Curating the best technology products from around the world",
                "Providing exceptional customer support and technical guidance",
                "Making cutting-edge technology accessible and understandable",
                "Building a community of tech enthusiasts and everyday users alike"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-tech-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-tech-gray">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Tech workspace" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-tech-accent p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-white">10+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-dark mb-4">Our Core Values</h2>
            <p className="text-tech-gray max-w-3xl mx-auto">
              These principles guide every decision we make, from the products we choose to sell to the way we interact with our customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-tech-accent" />,
                title: "Quality & Reliability",
                description: "We never compromise on quality. Every product in our catalog is thoroughly vetted for performance, durability, and user experience."
              },
              {
                icon: <Globe className="h-10 w-10 text-tech-accent" />,
                title: "Innovation & Progress",
                description: "We embrace technological advancement and continuously seek out products that represent the cutting edge of what's possible."
              },
              {
                icon: <Clock className="h-10 w-10 text-tech-accent" />,
                title: "Transparency & Honesty",
                description: "We believe in being straightforward about what our products can and cannot do, providing honest reviews and recommendations."
              }
            ].map((value, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <div className="mb-5">{value.icon}</div>
                <h3 className="text-xl font-semibold text-tech-dark mb-3">{value.title}</h3>
                <p className="text-tech-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Story */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-dark mb-4">Our Journey</h2>
            <p className="text-tech-gray">
              The story of how TechPulse evolved from a small startup to a trusted technology retailer.
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                year: "2015",
                title: "The Beginning",
                description: "TechPulse was founded in a small apartment by two tech enthusiasts with a vision to make technology more accessible."
              },
              {
                year: "2017",
                title: "First Physical Store",
                description: "After growing our online presence, we opened our first brick-and-mortar store to provide hands-on experience with products."
              },
              {
                year: "2019",
                title: "Expansion & Growth",
                description: "We expanded our product line and team, focusing on building relationships with leading tech manufacturers worldwide."
              },
              {
                year: "2022",
                title: "Community Focus",
                description: "We launched our community initiatives, including tech workshops, educational programs, and support for tech startups."
              },
              {
                year: "Today",
                title: "Looking Forward",
                description: "We continue to grow and evolve, always keeping our core mission at the heart of everything we do."
              }
            ].map((milestone, index) => (
              <div key={index} className="flex">
                <div className="mr-8">
                  <div className="h-12 w-12 bg-tech-accent rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < 4 && <div className="h-full w-0.5 bg-tech-accent/30 mx-auto my-2"></div>}
                </div>
                <div>
                  <div className="text-tech-accent font-medium mb-1">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-tech-dark mb-2">{milestone.title}</h3>
                  <p className="text-tech-gray">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
