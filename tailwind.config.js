/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: [ 'Radwave', 'sans-serif'],
    },
    extend: {},
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [require('daisyui')],
}