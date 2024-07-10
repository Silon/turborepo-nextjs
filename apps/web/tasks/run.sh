#!/bin/bash

# dev | build | start | preview | analyze
TASK=$1

if [ "$TASK" = "dev" ]; then
    echo -e "\033[1m🚀 Running dev scripts...\033[0m"
    node ./scripts/createEnvTypesFile/index.js || exit 1
    echo -e "\033[32m✓\033[0m Environment types file created."
    echo "";
    echo -e "\033[1m🚀 Running NextJS server...\033[0m "
    pnpm next dev
elif [ "$TASK" = "build" ]; then
    echo "Building app..."
    pnpm next build 
    pnpm next-sitemap
elif [ "$TASK" = "start" ]; then
    echo "Starting app..."
    pnpm next start
elif [ "$TASK" = "preview" ]; then
    echo "Previewing app..."   
    pnpm next build
    pnpm next start
elif [ "$TASK" = "analyze" ]; then
    export ANALYZE=true
    echo "Analyzing app..."
    pnpm next build
else
    echo "Unknown task: $TASK"
fi