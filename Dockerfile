# Use the official Node.js image as base
FROM node:21.7.1-alpine

# Install additional dependencies
RUN apk add --no-cache python3 make g++

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy .env file into the container
COPY .env ./

# Expose the port that your app runs on
EXPOSE 3101

# Command to run your app
CMD ["npm", "run", "start"]
