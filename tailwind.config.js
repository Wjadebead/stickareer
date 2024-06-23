/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        myborder: 'var(--color-myborder)',
      }
    },
  },
  plugins: [],
  darkMode: "class",
}