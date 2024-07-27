/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        red:'rgb(255, 0, 0)',
        green:'rgb(0, 204, 0)',
        yellow:'rgb(255, 217, 0)',
        gray:'rgba(59, 59, 59, 0.349)',
        grandson:'rgb(90, 90, 90)'

      }
    },
  },
  plugins: [],
};
