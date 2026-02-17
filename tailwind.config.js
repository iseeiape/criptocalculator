/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'crypto-dark': '#0a0a0f',
        'crypto-card': '#151520',
        'crypto-accent': '#00d4ff',
        'crypto-purple': '#8b5cf6',
        'crypto-green': '#10b981',
        'crypto-red': '#ef4444',
      },
    },
  },
  plugins: [],
}