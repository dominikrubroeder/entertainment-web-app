/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-primary-red': 'hsl(0°, 97%, 63%)',
        'app-blue-300': 'hsl(223°, 23%, 46%)',
        'app-blue-800': 'hsl(223°, 36%, 14%)',
        'app-blue-900': 'hsl(223°, 30%, 9%)',
      },
    },
  },
  plugins: [],
};
