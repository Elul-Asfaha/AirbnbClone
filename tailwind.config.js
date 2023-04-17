/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'Niramit': ['Niramit','sans-serif']
    },
    extend: {
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}