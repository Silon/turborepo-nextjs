#!/bin/sh
eslint ./src -c ./.eslintrc.js --format stylish --ext .js,.jsx,.ts,.tsx
tsc --noEmit