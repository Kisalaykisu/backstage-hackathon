FROM node:18

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile

# Build app using Backstage CLI
RUN yarn backstage-cli build

# Run the app
CMD ["yarn", "start"]