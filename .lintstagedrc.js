module.exports = {
  './apps/**/*.{js,ts,tsx}': () => ['tsc --noEmit', 'eslint'],
  './packages/**/*.{js,ts,tsx}': () => ['tsc --noEmit', 'eslint'],
}
