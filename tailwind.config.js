module.exports = {
  content: ["./src/componants/**/*.js", "./pages/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        royal: "#190873",
        accent: "#100750]",
      },
      fontfamily: {
        Dela: ['"Dela Gothic One"', "cursive"],
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
