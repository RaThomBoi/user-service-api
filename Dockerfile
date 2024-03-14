FROM node:18-alpine

# Create directory inside container
RUN mkdir ./app

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript code within container on /app directory
RUN npm run build

# Set working directory to the compiled code directory
WORKDIR /app/dist

# Command to run the application
CMD ["node", "index.js"]
