/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-primary-red': 'hsl(0, 97%, 63%)',
        'app-blue-300': 'hsl(223, 23%, 46%)',
        'app-blue-800': 'hsl(223, 36%, 14%)',
        'app-blue-900': 'hsl(223, 30%, 9%)',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'translateY(4%)',
            opacity: '0',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
            visibility: 'visible',
          },
        },
        scale: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.2)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out forwards',
        scale: 'scale .2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
