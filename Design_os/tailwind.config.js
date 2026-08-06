/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0A0A0A",
        gold: "#D4AF37",
        text: "#FFFFFF",
        muted: "#A1A1AA",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },

      borderRadius: {
        premium: "24px",
      },

      boxShadow: {
        glow: "0 0 40px rgba(212,175,55,0.25)",
      },
    },
  },

  plugins: [],
}