/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#7AB2D1",
        oscuro: "#345060",
        claro: "#A9E0FF"
      }
    },
  },
  plugins: [],
}
