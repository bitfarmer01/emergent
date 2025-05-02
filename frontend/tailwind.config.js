/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#0C0028',
        'neon-pink': '#FF00C7',
        'electric-blue': '#2B6CF6',
        'accent-pink': '#E100FF',
        'white': '#FFFFFF',
        'light-lavender': '#D6CFFF',
      },
      backgroundImage: {
        'galaxy-gradient': 'linear-gradient(to bottom right, #0C0028, #FF00C7)',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1.2)' },
        },
      },
    },
  },
  plugins: [],
};