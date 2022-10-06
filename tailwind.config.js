/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        heroBg: "#68C9BA",
        btnBg: "#9C69E2",
        aboutBg: "#F063B8",
        testBg: "#9C69E2",
        heading: "#212353",
        paragraph: "#4B5D68",
        abouttBg: "rgba(240, 99, 184, 0.15)",
        tryBtn: "#F063B8",
        accent: {
          primary: "#9C69E2",
          primary_hover: "#9059DB",
          secondary: "#F063B8",
          secondary_hover: "#E350A9",
          tertiary: "#68C9BA",
        },
      },

      fontFamily: {
        Roboto: "Roboto",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
