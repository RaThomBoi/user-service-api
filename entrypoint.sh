#!/bin/sh
set -e

# Expected working directory to /app
# Run Prisma migrations
echo "currently on /app"
npx prisma db push
echo "prisma db push done."

# Change working directory to /app/dist
cd /app/dist
echo "cd to /app/dist"

# Run the main application in the background
echo "running node index.js"
(node index.js &)

# Keep the container running
exec "$@"
