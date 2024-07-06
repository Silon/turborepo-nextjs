#!/bin/sh
set -e
echo "🛠️  Running ESLint..."
eslint .
echo "✅ ESLint completed"
echo "🛠️  Running TypeScript..."
tsc --noEmit --project tsconfig.json
echo "✅ TypeScript completed"