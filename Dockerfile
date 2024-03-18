FROM public.ecr.aws/docker/library/node:18-alpine3.19

# Create directory inside container
RUN mkdir ./app

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json into /app
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript code within container on /app directory
RUN npm run build

# Generate Prisma client
RUN npx prisma generate

# Set working directory to the compiled code directory
WORKDIR /app

# Copy the entrypoint script into /app
COPY entrypoint.sh .

# Make the entrypoint script executable
RUN chmod +x entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["entrypoint.sh"]

# document for inform whoever using this Dockerfile, this app is listening to port 3100.
EXPOSE 3100


