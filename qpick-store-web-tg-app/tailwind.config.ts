/* @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { min: '320px', max: '639px' },
      'sm-min': { min: '320px' },
      'sm-max': { max: '639px' },
      md: { min: '640px', max: '767px' },
      'md-min': { min: '640px' },
      'md-max': { max: '767px' },
      lg: { min: '768px', max: '1023px' },
      'lg-min': { min: '768px' },
      'lg-max': { max: '1023px' },
      xl: { min: '1024px', max: '1279px' },
      'xl-min': { min: '1024px' },
      'xl-max': { max: '1279px' },
      '2xl': { min: '1280px' },
    },
    colors: {
      'card-bg': '#281717', // dark-theme
      'block-color-bg': '#371818', // dark-theme
      'block-border-color': 'red', // dark-theme
      'main-bg': '#281717', // dark-theme
      'main-text': '#FFA542', // dark-theme
      'hover-color': 'red', // dark-theme
      'button-color-bg': '#1C1C27', // dark-theme
      'button-hover-color-bg': '#5e3232', // dark-theme
      'input-bg': '#ced0c8', // dark-theme
      'input-text': '#1C1C27', // dark-theme
      'select-color-text': 'black', // dark-theme
      'card-border-color': '#662828', // dark-theme
      'aqua-color-text': '#07d3d3', // dark-theme
      'title-color-text': '#FFA542', // dark-theme
    },
    boxShadow: {
      shadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
    },
    extend: {},
  },
  plugins: [],
};
