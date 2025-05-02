import React from 'react';

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-accent-pink text-white py-2 text-center text-sm">
        Free 2-Day Shipping for US Orders Over $100
      </div>
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center">
          <div className="text-white text-xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            Galaxy Lamps
          </div>
        </div>
        <div className="text-white relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-electric-blue text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;