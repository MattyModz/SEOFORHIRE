module.exports = {
  content: ["./src/componants/**/*.js", "./pages/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "header-blue": "#054ADA",
        "logo-pink": "#EF91C2",
        "body-dark": "#1f2937",
        primary: "#054ADA",
        secondary: "var(--color-secondary)",
        accent: "#EF91C2",
      },
      fontfamily: {
        Roboto: ["Robot", "sans-serif"],
      },

      screens: {
        xs: { max: "321px" },
        xsm: { max: "352px" },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
