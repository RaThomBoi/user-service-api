#!/bin/sh
set -e

# Change working directory to /app
cd /app

# Run Prisma migrations
npx prisma db push
echo "prisma db push done."

# Change working directory to /app/dist
cd /app/dist

# Run the main application in the background
(node index.js &)

# Keep the container running
exec "$@"
