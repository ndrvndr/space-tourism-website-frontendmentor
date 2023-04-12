/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile-home": "url('/src/assets/home/background-home-mobile.jpg')",
        "bg-mobile-destination":
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        "bg-mobile-crew": "url('/src/assets/crew/background-crew-mobile.jpg')",
        "bg-mobile-tech":
          "url('/src/assets/technology/background-technology-mobile.jpg')",
      },
      fontFamily: {
        bellefair: "'Bellefair', serif",
        barlowcond: "'Barlow Condensed', serif",
        barlow: "'Barlow', serif",
      },
    },
  },
  plugins: [],
};
