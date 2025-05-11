
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={`font-bold text-2xl ${isScrolled ? 'text-tech-dark' : 'text-white'}`}>
              SADO<span className="text-tech-accent">TECH</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isScrolled ? 'text-tech-dark' : 'text-white'} active-nav-link font-medium`}>Home</Link>
            <Link to="/products" className={`nav-link ${isScrolled ? 'text-tech-dark' : 'text-white'} font-medium`}>Products</Link>
            <Link to="/categories" className={`nav-link ${isScrolled ? 'text-tech-dark' : 'text-white'} font-medium`}>Categories</Link>
            <Link to="/deals" className={`nav-link ${isScrolled ? 'text-tech-dark' : 'text-white'} font-medium`}>Deals</Link>
            <Link to="/about" className={`nav-link ${isScrolled ? 'text-tech-dark' : 'text-white'} font-medium`}>About</Link>
          </nav>

          {/* Desktop Search & Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className={`relative ${isScrolled ? 'text-tech-dark' : 'text-white'}`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                className={`pl-9 pr-4 py-2 rounded-full text-sm ${
                  isScrolled 
                  ? 'bg-gray-100 text-tech-dark focus:bg-white' 
                  : 'bg-white/10 text-white placeholder:text-white/70 focus:bg-white/20'
                } outline-none transition-all w-40 md:w-60 focus:w-72`}
              />
            </div>
            
            <Link to="/account" className={`p-2 rounded-full hover:bg-white/10 transition-colors ${isScrolled ? 'text-tech-dark' : 'text-white'}`}>
              <User className="w-5 h-5" />
            </Link>
            
            <Link to="/cart" className={`p-2 rounded-full hover:bg-white/10 transition-colors ${isScrolled ? 'text-tech-dark' : 'text-white'} relative`}>
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-tech-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className={`p-2 mr-2 relative ${isScrolled ? 'text-tech-dark' : 'text-white'}`}>
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-tech-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMobileMenu} 
              className={`p-2 rounded-md ${isScrolled ? 'text-tech-dark' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 bg-white border-b border-gray-200 shadow-lg">
          <div className="mb-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 rounded-lg text-sm bg-gray-100 focus:bg-white transition-colors outline-none"
            />
          </div>
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-tech-dark font-medium py-2 hover:text-tech-accent" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/products" className="text-tech-dark font-medium py-2 hover:text-tech-accent" onClick={toggleMobileMenu}>Products</Link>
            <Link to="/categories" className="text-tech-dark font-medium py-2 hover:text-tech-accent" onClick={toggleMobileMenu}>Categories</Link>
            <Link to="/deals" className="text-tech-dark font-medium py-2 hover:text-tech-accent" onClick={toggleMobileMenu}>Deals</Link>
            <Link to="/about" className="text-tech-dark font-medium py-2 hover:text-tech-accent" onClick={toggleMobileMenu}>About</Link>
            <Link to="/account" className="text-tech-dark font-medium py-2 hover:text-tech-accent flex items-center" onClick={toggleMobileMenu}>
              <User className="w-4 h-4 mr-2" />
              Account
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
