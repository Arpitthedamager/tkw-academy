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
        accent: '#232323',
        neutral: '#f67a45',
        black_3: "#1d1d1d",
        paragraph: "#998982",
        white: "white",
        coral: "#f67a45",
        black_4: "#232323",
        black_2: "#2f2e2e",
        black: "black",
        text_dark: "#0e0e0e",
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
