
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="font-bold text-2xl text-tech-dark">
                SADO<span className="text-tech-accent">TECH</span>
              </div>
            </Link>
            <p className="text-tech-gray mb-6 max-w-md">
              Your premier destination for cutting-edge technology products. We offer the latest devices from trusted brands to enhance your digital lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-tech-gray hover:text-tech-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-tech-gray hover:text-tech-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-tech-gray hover:text-tech-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-tech-gray hover:text-tech-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-tech-dark mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-tech-gray hover:text-tech-accent transition-colors">All Products</Link></li>
              <li><Link to="/categories/laptops" className="text-tech-gray hover:text-tech-accent transition-colors">Laptops</Link></li>
              <li><Link to="/categories/smartphones" className="text-tech-gray hover:text-tech-accent transition-colors">Smartphones</Link></li>
              <li><Link to="/categories/audio" className="text-tech-gray hover:text-tech-accent transition-colors">Audio</Link></li>
              <li><Link to="/categories/gaming" className="text-tech-gray hover:text-tech-accent transition-colors">Gaming</Link></li>
              <li><Link to="/deals" className="text-tech-gray hover:text-tech-accent transition-colors">Deals</Link></li>
            </ul>
          </div>
          
          {/* Account */}
          <div>
            <h3 className="font-semibold text-tech-dark mb-4">Account</h3>
            <ul className="space-y-3">
              <li><Link to="/account" className="text-tech-gray hover:text-tech-accent transition-colors">My Account</Link></li>
              <li><Link to="/orders" className="text-tech-gray hover:text-tech-accent transition-colors">Order History</Link></li>
              <li><Link to="/wishlist" className="text-tech-gray hover:text-tech-accent transition-colors">Wishlist</Link></li>
              <li><Link to="/cart" className="text-tech-gray hover:text-tech-accent transition-colors">Shopping Cart</Link></li>
              <li><Link to="/support" className="text-tech-gray hover:text-tech-accent transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-tech-dark mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-tech-gray hover:text-tech-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-tech-gray hover:text-tech-accent transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-tech-gray hover:text-tech-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-tech-gray hover:text-tech-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-tech-gray hover:text-tech-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-tech-gray hover:text-tech-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-tech-gray text-sm">© {currentYear} SadoTech. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-tech-gray text-sm">Payment Methods:</span>
              <div className="flex space-x-3">
                <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div className="w-10 h-6 bg-[#ff5f00] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MC</span>
                </div>
                <CreditCard className="w-6 h-6 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
