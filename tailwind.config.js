/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B5E20",       // Dark green
        accent: "#43A047",        // Lighter green
        gold: "#C49A42",          // Gold
        softGray: "#F7F9FB",      // Soft section background
        secondary: "#F2F2F2",     // Light body background
        textMain: "#1E1E1E",      // Main dark text
        textLight: "#5C5C5C",     // Light text
        borderLight: "#DCDCDC",   // Border color
        darkGreen: "#0E3C1A",     // Footer background
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

