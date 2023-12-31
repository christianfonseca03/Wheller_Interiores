/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridRowStart: {
        '9': "9",
      },

      colors: {
        darkBlue: {
          50: "#130D31",
        },
        pageColor: {
          50: "#F2F2F2",
        },
        buttonColor: {
          50: "#302F4E",
        },
        lightBlue: {
          50: "#302F4E",
        },
        lightBrown: {
          50: "#C8B79B",
        },
      },
    },
  },
  plugins: [],
};
