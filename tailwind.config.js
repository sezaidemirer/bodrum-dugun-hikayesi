/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9f0',
          100: '#fdf2e0',
          200: '#fae4c1',
          300: '#f6d082',
          400: '#f2b850',
          500: '#efa02e',
          600: '#e0821a',
          700: '#ba6415',
          800: '#955018',
          900: '#794316',
        },
        bodrum: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        champagne: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        nude: {
          50: '#fef7f4',
          100: '#fdeee7',
          200: '#fad9ca',
          300: '#f6baa5',
          400: '#f09377',
          500: '#e76f4d',
          600: '#d5512e',
          700: '#b13f23',
          800: '#923620',
          900: '#78321f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        kenBurns: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.1) translate(-2%, -2%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.02)' },
        },
      },
      animation: {
        kenBurns: 'kenBurns 20s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

