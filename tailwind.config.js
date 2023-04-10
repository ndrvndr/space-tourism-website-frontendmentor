/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile-home": "url('/src/assets/home/background-home-mobile.jpg')",
        "bg-mobile-destination":
          "url('/src/assets/destination/background-destination-mobile.jpg')",
      },
      fontFamily: {
        bellefair: "'Bellefair', serif",
        barlow: "'Barlow Condensed', serif",
      },
    },
  },
  plugins: [],
};
