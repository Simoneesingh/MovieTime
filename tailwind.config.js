/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        b1: "#1e1b4b",
        b2: "#db2777",
        b3: "#be185d",
        primary: "#FFC107"
        
      }
    },
  },
  plugins: [],
}