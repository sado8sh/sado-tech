
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Software Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "The laptop I purchased exceeds all expectations. The performance is incredible and the build quality is top-notch. Customer service was exceptional throughout the entire process.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Graphic Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "As a designer, I needed a high-performance monitor with accurate color reproduction. TechPulse delivered exactly what I needed. The shipping was fast and the product arrived in perfect condition.",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      role: "IT Professional",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      content: "I've been shopping for tech products for years, and TechPulse offers the best combination of quality, price, and customer service. Their product range is impressive and shipping is always on time.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-dark mb-4">What Our Customers Say</h2>
          <p className="text-tech-gray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their shopping experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:-translate-y-1 duration-300">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              {/* Testimonial content */}
              <p className="text-tech-gray mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Customer info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-tech-dark font-semibold">{testimonial.name}</h4>
                  <p className="text-tech-gray text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
