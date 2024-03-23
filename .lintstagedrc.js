module.exports = {
  'src/**/*.{js,ts,tsx}': () => ['tsc --noEmit', 'eslint'],
};
