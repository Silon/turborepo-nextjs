#!/bin/sh
set -e
echo "🛠️  Running ESLint..."
eslint .
echo "✅ ESLint completed"
echo "🛠️  Running TypeScript..."
tsc --noEmit
echo "✅ TypeScript completed"