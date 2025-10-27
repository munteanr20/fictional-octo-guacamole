// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- The problem is often here
  ],
  theme: {
    extend: {
      colors: {
        'shire-green': '#2a5a2a',
        'rohan-gold': '#d4af37',
        'gondor-silver': '#c0c0c0',
        'mordor-black': '#1a1a1a',
      },
      fontFamily: {
        serif: ['"Aniron"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'sans-serif']
      }
    },
  },
  plugins: [],
}