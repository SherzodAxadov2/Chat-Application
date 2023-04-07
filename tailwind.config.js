/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        yellow: "#FB8E0B",
        black: "#1B1C20",
        grayBold: "#383A47",
        gray: "#797B89",
        grayLight: "#C6C8D3",
        primary: "#FD6003",
        bg1: "#474958",
        bg2: "#E8E9ED",
        bg3: "#F8F8FA",
        testimonials: "#C4C4C4",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
