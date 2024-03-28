#!/bin/sh
echo "🛠️  Running ESLint..."
eslint ./src -c ./.eslintrc.js --format stylish --ext .js,.jsx,.ts,.tsx
echo "✅ ESLint completed"
echo "🛠️  Running TypeScript..."
tsc --noEmit
echo "✅ TypeScript completed"