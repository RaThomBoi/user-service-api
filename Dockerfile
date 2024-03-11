FROM node:18-alpine

# create directory inside container
RUN mkdir ./app

COPY . ./app

WORKDIR /app/dist

# install dependencies
RUN npm install

# this command will be executed on WORKDIR
CMD ["node", "index.js"]
