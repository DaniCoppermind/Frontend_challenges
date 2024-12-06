/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'purple': 'hsl(259, 100%, 65%)',
          'light-red': 'hsl(0, 100%, 67%)'
        },
      }
    },
  },
  plugins: [],
}