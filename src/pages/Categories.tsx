import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight, Grid3x3, Layers, Palette, Banknote, Award } from 'lucide-react';
interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  count: number;
  icon: React.ReactNode;
  featured?: boolean;
}
const CategoriesPage: React.FC = () => {
  const categories: Category[] = [{
    id: 1,
    name: "Laptops",
    description: "Powerful devices for work and entertainment",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    count: 124,
    icon: <Layers className="w-5 h-5" />,
    featured: true
  }, {
    id: 2,
    name: "Smartphones",
    description: "Stay connected with cutting-edge technology",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    count: 78,
    icon: <Grid3x3 className="w-5 h-5" />
  }, {
    id: 3,
    name: "Audio",
    description: "Crystal clear sound for immersive experiences",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    count: 92,
    icon: <Palette className="w-5 h-5" />,
    featured: true
  }, {
    id: 4,
    name: "Monitors",
    description: "See more with high resolution displays",
    image: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    count: 56,
    icon: <Grid3x3 className="w-5 h-5" />
  }, {
    id: 5,
    name: "Gaming",
    description: "Level up your gaming experience",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80",
    count: 82,
    icon: <Award className="w-5 h-5" />
  }, {
    id: 6,
    name: "Accessories",
    description: "Essential additions for your tech",
    image: "https://images.unsplash.com/photo-1625378308836-59481e2f8e6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    count: 153,
    icon: <Palette className="w-5 h-5" />
  }, {
    id: 7,
    name: "Storage",
    description: "Keep your data secure and accessible",
    image: "https://images.unsplash.com/photo-1531492053551-414e8461ae41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    count: 47,
    icon: <Layers className="w-5 h-5" />
  }, {
    id: 8,
    name: "Cameras",
    description: "Capture moments with precision",
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    count: 64,
    icon: <Grid3x3 className="w-5 h-5" />
  }, {
    id: 9,
    name: "Wearables",
    description: "Tech that moves with you",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    count: 38,
    icon: <Award className="w-5 h-5" />,
    featured: true
  }, {
    id: 10,
    name: "TVs",
    description: "Immersive entertainment for your home",
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    count: 29,
    icon: <Banknote className="w-5 h-5" />
  }, {
    id: 11,
    name: "Smart Home",
    description: "Make your home smarter and more efficient",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    count: 51,
    icon: <Award className="w-5 h-5" />
  }, {
    id: 12,
    name: "Networking",
    description: "Keep connected with reliable equipment",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    count: 43,
    icon: <Banknote className="w-5 h-5" />
  }];

  // Filter featured categories
  const featuredCategories = categories.filter(cat => cat.featured);
  // Get remaining categories
  const regularCategories = categories.filter(cat => !cat.featured);
  return <div className="min-h-screen flex flex-col">
      {/* Dark background header section to make navbar links visible */}
      <div className="bg-tech-dark h-64 w-full absolute top-0 left-0 z-0"></div>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50">Browse By Category</h1>
            <p className="text-tech-gray max-w-2xl mx-auto">
              Explore our extensive collection of premium tech products across various categories to find exactly what you need
            </p>
          </div>
          
          {/* Featured Categories - Hero Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCategories.map(category => <Link key={category.id} to={`/categories/${category.name.toLowerCase()}`} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[16/9] col-span-1">
                  <div className="absolute inset-0">
                    <img src={category.image} alt={category.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                            <p className="text-gray-200 text-sm mb-3">{category.description}</p>
                            <div className="flex items-center">
                              <span className="bg-tech-accent/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                                {category.count} Products
                              </span>
                            </div>
                          </div>
                          <div className="bg-tech-accent rounded-full p-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <ChevronRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>)}
            </div>
          </div>
          
          {/* All Categories Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-tech-dark mb-8">All Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularCategories.map(category => <Link key={category.id} to={`/categories/${category.name.toLowerCase()}`} className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={category.image} alt={category.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-tech-dark text-xl font-semibold group-hover:text-tech-accent transition-colors">
                          {category.name}
                        </h3>
                        <div className="bg-gray-100 p-2 rounded-full">
                          {category.icon}
                        </div>
                      </div>
                      <p className="text-tech-gray text-sm mb-4">{category.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-tech-gray font-medium">{category.count} Products</span>
                      <span className="text-tech-accent font-medium flex items-center text-sm">
                        View Category
                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>)}
            </div>
          </div>
          
          {/* Category Browsing Help Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-tech-dark mb-4">
                  Need Help Finding the Right Products?
                </h2>
                <p className="text-tech-gray mb-6">
                  Our tech experts are available to guide you through our catalog and help you find the perfect products that match your needs and budget.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-6 py-3 bg-tech-dark text-white font-medium rounded-lg hover:bg-tech-accent transition-colors">
                    Contact Support
                  </Link>
                  <Link to="/products" className="px-6 py-3 bg-white border border-gray-200 text-tech-dark font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Browse All Products
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-tech-accent/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tech-accent/10 rounded-full"></div>
                <img src="/grid-pattern.png" alt="Pattern" className="w-full h-auto rounded-xl relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default CategoriesPage;