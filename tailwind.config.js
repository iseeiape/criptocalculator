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
        'crypto-card-hover': '#1e1e2d',
        'crypto-accent': '#00d4ff',
        'crypto-purple': '#8b5cf6',
        'crypto-pink': '#ec4899',
        'crypto-green': '#10b981',
        'crypto-red': '#ef4444',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'crypto-glow': 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(139,92,246,0.1) 50%, rgba(236,72,153,0.1) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-x': 'gradient-x 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 60px rgba(139,92,246,0.3)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'crypto': '0 0 40px rgba(0,212,255,0.15)',
        'crypto-lg': '0 0 60px rgba(0,212,255,0.25)',
        'glow-cyan': '0 0 30px rgba(0,212,255,0.4)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.4)',
        'glow-green': '0 0 30px rgba(16,185,129,0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
