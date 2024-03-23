const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "ar-primary": "#003844",
      },
    },
  },
  plugins: [],
});
