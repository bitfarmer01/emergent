import React from 'react';

const HeroSection = () => {
  return (
    <div className="galaxy-background min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Main Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-20 pb-32">
        <div className="max-w-3xl mx-auto text-backdrop py-8 px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight text-glow animate-glow">
            Transform Any Room
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium text-light-lavender mb-8">
            Into Your Own Planetarium
          </h2>
          <button className="bg-accent-pink hover:bg-neon-pink text-white font-semibold py-3 px-8 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Explore Galaxy Projectors
          </button>
        </div>
      </div>

      {/* Bottom Product Showcase */}
      <div className="relative flex justify-center pb-4 z-10">
        <div className="beam-effect relative">
          <img 
            src="https://images.pexels.com/photos/7296361/pexels-photo-7296361.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Galaxy Lamp Projector" 
            className="w-64 h-64 object-contain animate-float"
          />
        </div>
      </div>

      {/* Subtle stars effect */}
      <div className="absolute inset-0 z-0 opacity-60">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full" 
            style={{
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;