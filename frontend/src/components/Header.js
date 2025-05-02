import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-accent-pink text-white py-2 text-center text-sm font-medium tracking-wide">
        Free 2-Day Shipping for US Orders Over $100
      </div>
      
      {/* Navigation */}
      <nav className={`flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 transition-all duration-300 ${
        scrolled ? 'bg-deep-purple bg-opacity-90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="flex items-center">
          <div className="text-white text-xl font-bold flex items-center group">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 mr-2 transition-transform duration-700 ease-in-out group-hover:rotate-45" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
            </svg>
            <span className="relative">
              Galaxy Lamps
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-pink group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200">
            Shop
          </button>
          <button className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200">
            About
          </button>
          <div className="text-white relative group">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-electric-blue text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-pink">
              0
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;