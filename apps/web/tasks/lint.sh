#!/bin/sh
set -e
echo "🛠️  Checking code with ESLint..."
eslint .
echo "\033[32m✓\033[0m ESLint completed"
echo "🛠️  Checking code with TypeScript..."
tsc --noEmit --project tsconfig.json
echo "\033[32m✓\033[0m TypeScript completed"