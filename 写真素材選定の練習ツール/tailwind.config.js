/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        card: '#1A1A1A',
        accent: '#F5C842',
        correct: '#4ADE80',
        wrong: '#F87171',
        surface: '#242424',
        border: '#2E2E2E',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        levelUp: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        slideUp: 'slideUp 0.4s ease-out forwards',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        levelUp: 'levelUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
    },
  },
  plugins: [],
}
