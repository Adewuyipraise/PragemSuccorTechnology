/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D97706', // Warm Amber/Orange
        secondary: '#92400E', // Darker Amber
        accent: '#FCD34D', // Light Yellow
        warmGray: '#F5F5F4',
      }
    },
  },
  plugins: [],
}
