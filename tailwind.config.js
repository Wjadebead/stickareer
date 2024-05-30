/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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