# First stage: Building the Node.js application
FROM node:lts AS build
WORKDIR /app

# Copy package.json and yarn.lock separately to leverage Docker layer caching
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Node.js application
RUN yarn build

# Second stage: Runtime environment with Deno
FROM denoland/deno:alpine AS runtime

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=8085

# Expose the port where the application will run
EXPOSE 8085

# Copy the built application from the previous stage
COPY --from=build /app /app

# Specify the command to run the application using Deno
CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "/app/dist/server/entry.mjs"]
