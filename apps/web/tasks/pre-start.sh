echo "\033[1m🚀 Running pre-start scripts...\033[0m"
node ./scripts/create-env-types-file.js || exit 1
echo "\033[32m✓\033[0m Environment types file created."

