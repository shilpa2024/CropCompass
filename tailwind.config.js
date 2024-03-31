/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slider-background-image': "linear-gradient(#1c607f, #44baef), url('../src/assets/GreenBackground.jpg')",
        'about-us-topsection-bg-img': "linear-gradient(#15183f, #145b7b), url('../src/assets/Vegitable_background.jpg')"
      }
    },
    fontFamily: {
      'Rubik': ['"Rubik"']
    },
  },
  plugins: [],
}

