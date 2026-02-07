/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-clash)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
        clash: ["var(--font-clash)", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url(/images/hero-bg.png)",
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgba(5, 150, 105, 0.4)",
      },
    },
  },
  plugins: [],
};
