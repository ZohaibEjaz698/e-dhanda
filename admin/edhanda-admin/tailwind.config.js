/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#fcfcf7',
        'secondary':'#171717',
         'accent1' : "#0a7273",
         'accent2' : "#fda521",
         'accent3' : "#033043",
         'accent4' : "#e9d3d5",
      }
    },
  },
  plugins: [],
}