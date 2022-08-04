/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

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
        fadeToRight: {
          '0%': {
            transform: 'translateX(-4%)',
            opacity: '0',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0)',
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
        'scale-small': {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.085)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeToRight: 'fadeToRight 1s ease-out forwards',
        scale: 'scale .2s ease-out forwards',
        'scale-small': 'scale-small .2s ease-out forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-100': {
          'animation-delay': '100ms',
        },
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-700': {
          'animation-delay': '700ms',
        },
        '.animation-delay-800': {
          'animation-delay': '800ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
      });
    }),
  ],
};
