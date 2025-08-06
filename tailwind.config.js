/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",       // Dark green base
        accent: "#43A047",        // Vivid glowing green
        gold: "#C49A42",          // Gold highlight
        softGray: "green-300",      // Dark section background
        secondary: "#122822",     // Slightly lighter dark (cards, sections)
        textMain: "#EAEAE",      // Main light text
        textLight: "#9CA3AF",     // Muted light text
        borderLight: "#2E7D32",   // Glowing border accent
        darkGreen: "#081911",     // Deep footer background
        neonGreen: "39FF14",      // glowy accent
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
        fadeIn: "fadeIn 0.8s ease-in-out",
        glowPulse: "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 8px #43A047" },
          "50%": { boxShadow: "0 0 16px #43A047" },
        },
      },
      boxShadow: {
        glow: "0 0 12px #43A047",
        goldGlow: "0 0 12px #C49A42",
        card: "0 4px 15px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};