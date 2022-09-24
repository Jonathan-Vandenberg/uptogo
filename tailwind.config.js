/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        lg: "4rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        navAdvertise: "rgb(235,250,239)",
        startColor: "rgb(248,149,41)",
        endColor: "rgb(255,217,8)",
        topNavColor: "rgb(196,245,208)",
        advertisingNavColor: "rgb(235, 250, 239)",
        hoverTextColor: "rgb(0,180,82)",
        iwanttoColor: "rgb(248,149,41)",
        body: "rgb(244,247,248)",
        cardBg: "rgb(244, 247, 248)",
        filterDropdown: "rgb(196, 245, 208)",
        blue: "rgb(255,255,255)",
        darkBlue: "rgb(19, 37, 83)",
        lightBlue: "#B0E3F5",
        orange: "#F69724",
        bgGradientStart: "#F1F5F9",
        bg1: "rgb(64, 224, 208)",
        bg2: "rgb(255, 170, 0)",
        bg3: "rgb(240, 84, 128)",
      },
      backgroundImage: {
        bgUrl: "url('../public/low-poly-grid-haikei (2).png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

// blue rgb(19, 37, 83)
// lightBlue: "rgb(0, 88, 161)",
// lightestBlue: "rgb(121, 166, 173)",
