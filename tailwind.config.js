
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors:{
        background: "#FFF7D8",
        gura: "#0066FF"
      },
      fontFamily: {
        libre: ['Libre Bodoni'],
        caslon: ['Libre Caslon Text'],
        antikua: ["Inknut Antiqua"]
      }
    },
  },
  plugins: [],
}
