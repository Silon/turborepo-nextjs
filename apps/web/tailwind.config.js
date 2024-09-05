const tailwindBase = require('@repo/tailwind-config/base')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindBase],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}
