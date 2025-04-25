/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // Reduce base font sizes by approximately 2 sizes
        'xs': '0.65rem',    // default was 0.75rem
        'sm': '0.75rem',    // default was 0.875rem
        'base': '0.875rem', // default was 1rem
        'lg': '1rem',       // default was 1.125rem
        'xl': '1.125rem',   // default was 1.25rem
        '2xl': '1.375rem',  // default was 1.5rem
        '3xl': '1.625rem',  // default was 1.875rem
        '4xl': '1.875rem',  // default was 2.25rem
        '5xl': '2.25rem',   // default was 3rem
        '6xl': '2.75rem',   // default was 3.75rem
        '7xl': '3.25rem',   // default was 4.5rem
        '8xl': '4.5rem',    // default was 6rem
        '9xl': '6rem',      // default was 8rem
      },
    },
  },
  plugins: [],
};
