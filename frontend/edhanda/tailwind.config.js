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
      },
      screens: {
        '-2xl' : { 'max': '1535px' },
        '-xl' : { 'max': '1279px' },
        '-lg' : { 'max': '1023px' },
        '-md' : { 'max': '767px' },
        '-sm' : { 'max': '639px' },
        '-xs' : { 'max': '479px' },
      }
    },
  },
  plugins: [],
}