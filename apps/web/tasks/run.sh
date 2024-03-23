#!/bin/bash

# dev | build | start | preview | analyze
TASK=$1

export APP_ENV=$2

if [ "$TASK" = "dev" ]; then
    echo "Running dev server..."
    pnpm next dev
elif [ "$TASK" = "build" ]; then
    echo "Building app..."
    pnpm next build
    if [ "$APP_ENV" = "production" ]; then
        pnpm next-sitemap
    fi
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
