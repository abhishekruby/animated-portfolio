# Use a lean Node image as the base
FROM node:22.5.1-alpine

# Set the working directory to the app directory
WORKDIR /portfolio


COPY .package*.json .
# Copy the entire project directory to the container
COPY . .

# Install project dependencies
RUN yarn install

# Expose the port your application will listen on (replace with actual port)
EXPOSE 3000

# Define the command to start your application
CMD ["yarn", "start"]
