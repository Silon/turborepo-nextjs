#!/bin/sh
RED="\033[1;31m"
GREEN="\033[1;32m"
NC="\033[0m"

linter_exit_code=1
tsc_exit_code=1

eslint ./src -c ./.eslintrc.js --format stylish --ext .js,.jsx,.ts,.tsx
linter_exit_code=$?

tsc --noEmit
tsc_exit_code=$?

if [ $linter_exit_code -ne 0 ]
  then
    echo "${RED} ❌ ESLint${NC}"
  else
    echo "${GREEN} ✔ ESLint${NC}"
fi

if [ $tsc_exit_code -ne 0 ]
  then
    echo "${RED} ❌ Typescript${NC}"
  else
    echo "${GREEN} ✔ Typescript${NC}"
fi

if [ $linter_exit_code != 0 && $tsc_exit_code != 0 ]
  then
    exit 1
  else
  echo "... Why?"
    exit 0
fi