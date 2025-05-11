
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Laptops",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      count: 124
    },
    {
      id: 2,
      name: "Smartphones",
      image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      count: 78
    },
    {
      id: 3,
      name: "Audio",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      count: 92
    },
    {
      id: 4,
      name: "Monitors",
      image: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      count: 56
    },
    {
      id: 5,
      name: "Gaming",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80",
      count: 82
    },
    {
      id: 6,
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1625378308836-59481e2f8e6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      count: 153
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-dark mb-4">Browse By Category</h2>
          <p className="text-tech-gray max-w-2xl mx-auto">
            Explore our wide range of high-quality tech products across various categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-tech-accent"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-gray-300 text-sm">{category.count} Products</p>
                  </div>
                  <div className="bg-tech-accent rounded-full p-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
