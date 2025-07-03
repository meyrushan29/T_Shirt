import React, { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import logoimg from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleGetStarted = () => {
    // Hide the button
    setShowGetStarted(false);
    
    // Navigate to your desired page
    // You can replace this with your routing logic
    window.location.href = "/get-started"; // Or use React Router: navigate('/get-started')
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-28">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-start">
            <img
              src={logoimg}
              alt="Pandora Garment Logo"
              className="h-28 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
              >
                Create Your Own Design
              </a>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-5">
            {/* Get Started Button - Only show if showGetStarted is true */}
            {showGetStarted && (
              <button
                onClick={handleGetStarted}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
              >
                Get Started
              </button>
            )}

            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-48 px-6 py-1 border border-gray-300 rounded-md text-24 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    autoFocus
                  />
                  <button
                    onClick={toggleSearch}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={toggleSearch}
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200 flex items-center space-x-1"
                >
                  <Search className="h-5 w-5" />
                  <span className="hidden sm:inline text-24 font-24 uppercase tracking-wide">
                    Search
                  </span>
                </button>
              )}
            </div>

            {/* Shopping Bag */}
            <div className="relative">
              <button className="text-gray-700 hover:text-red-500 transition-colors duration-200 flex items-center space-x-1">
                <ShoppingBag className="h-5 w-5" />
                <span className="hidden sm:inline text-24 font-24 uppercase">
                  Bag(0)
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-3 space-y-2 sm:px-3 bg-white border-t border-gray-100">
            {/* Get Started Button for Mobile - Only show if showGetStarted is true */}
            {showGetStarted && (
              <button
                onClick={handleGetStarted}
                className="bg-red-500 hover:bg-red-600 text-white block w-full text-left px-6 py-2 text-base font-24 transition-colors duration-200 uppercase tracking-wide rounded-md mb-2"
              >
                Get Started
              </button>
            )}
            
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 block px-6 py-2 text-base font-24 transition-colors duration-200 uppercase tracking-wide"
            >
              Collections
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 block px-6 py-2 text-base font-24 transition-colors duration-200 uppercase tracking-wide"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 block px-6 py-2 text-base font-24 transition-colors duration-200 uppercase tracking-wide"
            >
              Create Your Own Design
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;