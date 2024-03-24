/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@repo/tailwind-config/base")],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
