FROM node:18-alpine

# specify essential env value
ENV DATABASE_URL=postgresql://user:admin@localhost:5100/server?schema=user-service

# create directory inside container
RUN mkdir ./app

COPY . ./app

WORKDIR /app/dist

# install dependencies
RUN npm install

# this command will be executed on WORKDIR
CMD ["node", "index.js"]
