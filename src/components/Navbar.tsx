import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu as MenuIcon } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-green-900/90 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.svg" alt="FreshMart" className="h-10 w-10" />
            <span className="text-white text-2xl font-bold">FreshMart</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
            <Link to="/services" className="text-white hover:text-yellow-400">Services</Link>
            <Link to="/about" className="text-white hover:text-yellow-400">About Us</Link>
            <Link to="/categories" className="text-white hover:text-yellow-400">Categories</Link>
            <Link to="/contact" className="text-white hover:text-yellow-400">Contact</Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="text-white hover:text-yellow-400 relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="text-white hover:text-yellow-400">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/register" className="hidden md:block bg-yellow-400 text-green-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-yellow-300">
              Sign Up
            </Link>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-800/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" className="block text-white py-2">Home</Link>
            <Link to="/services" className="block text-white py-2">Services</Link>
            <Link to="/about" className="block text-white py-2">About Us</Link>
            <Link to="/categories" className="block text-white py-2">Categories</Link>
            <Link to="/contact" className="block text-white py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;