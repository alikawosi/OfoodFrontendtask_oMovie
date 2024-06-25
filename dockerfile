# Use an official Node runtime as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Install typescript globally
RUN npm install -g typescript

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a simple server to serve the React app
RUN npm install -g serve

# Set the command to serve the app
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose the port the app runs on
EXPOSE 3000
