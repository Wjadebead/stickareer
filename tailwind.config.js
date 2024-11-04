/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--color-brand)', // 기본 brand 색상
          '50': 'rgba(var(--color-brand-rgb), 0.3)', // 50% 투명도
        },
        myborder: 'var(--color-myborder)',
        customGray: '#838383',
        customBlue: '#0455b0'
      },
    },
  },
  plugins: [],
  darkMode: "class",
}