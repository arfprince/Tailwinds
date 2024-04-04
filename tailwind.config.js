/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  content:["./src/landing_page3.html"],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'Arial', 'sans-serif'],
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

