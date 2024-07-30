#!/bin/sh -e

completed() {
  echo "\033[32m✓\033[0m $1 completed"
}

checking() {
  echo "\033[33m⏳\033[0m Checking the code with $1..."
}

checking "ESLint"
eslint .
completed "ESLint"
checking "TypeScript"
tsc --noEmit --project tsconfig.json
completed "TypeScript"