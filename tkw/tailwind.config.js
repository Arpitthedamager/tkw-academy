/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        tertiary:'#f67a45',
        secondary_text:'#998982',
        accent: '#f67a45',
        neutral: '#f67a45',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#000000',
          secondary: '#FFFFFF',
          tertiary:'#f67a45',
          secondary_text:'#998982',
          accent: '#f67a45',
          neutral: '#f67a45',
        },
      },
    ],
  },
}
