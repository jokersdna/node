# Use Node.js LTS version as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the app's port
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
