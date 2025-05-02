import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Create a subtle parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.1}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="galaxy-background min-h-screen flex flex-col justify-between relative overflow-hidden"
    >
      {/* Main Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-20 pb-32">
        <div 
          className={`max-w-3xl mx-auto text-backdrop py-8 px-4 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight text-glow animate-glow"
            style={{ 
              transition: 'opacity 1s ease, transform 1s ease', 
              transitionDelay: '0.2s',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Transform Any Room
          </h1>
          <h2 
            className="text-3xl md:text-4xl font-medium text-light-lavender mb-10"
            style={{ 
              transition: 'opacity 1s ease, transform 1s ease', 
              transitionDelay: '0.4s',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Into Your Own Planetarium
          </h2>
          <button 
            className="animated-border bg-accent-pink hover:bg-neon-pink text-white font-semibold py-4 px-10 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ 
              transition: 'opacity 1s ease, transform 1s ease, box-shadow 0.3s ease', 
              transitionDelay: '0.6s',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Explore Galaxy Projectors
          </button>
        </div>
      </div>

      {/* Bottom Product Showcase */}
      <div 
        className="relative flex justify-center pb-4 z-10"
        style={{ 
          transition: 'opacity 1s ease, transform 1s ease', 
          transitionDelay: '0.8s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}
      >
        <div className="beam-effect relative">
          <div className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[300px] h-[200px] bg-accent-pink opacity-20 blur-[80px] rounded-full"></div>
          <img 
            src="https://images.pexels.com/photos/7296361/pexels-photo-7296361.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Galaxy Lamp Projector" 
            className="w-64 h-64 object-contain animate-float shadow-2xl"
          />
        </div>
      </div>

      {/* Subtle stars effect */}
      <div className="absolute inset-0 z-0 opacity-70">
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 3 + 1;
          const animationDuration = Math.random() * 3 + 2;
          
          return (
            <div 
              key={i}
              className="absolute bg-white rounded-full" 
              style={{
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `pulse ${animationDuration}s infinite alternate`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          );
        })}
      </div>
      
      {/* Light flare effects */}
      <div className="absolute top-1/4 -right-20 w-60 h-60 bg-electric-blue opacity-20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-neon-pink opacity-20 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default HeroSection;