# Use a Node.js base image
FROM node:14 as build-stage

# Set the working directory
WORKDIR /frontend

# Install the Vue CLI globally
RUN npm install -g @vue/cli@4.5.13

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Vue application
RUN npm run build

# Production stage
FROM nginx:1.21

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d
# Copy the built files from the build stage
COPY --from=build-stage /frontend/dist /usr/share/nginx/html

# Expose the appropriate port (default is 80 for Nginx)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
