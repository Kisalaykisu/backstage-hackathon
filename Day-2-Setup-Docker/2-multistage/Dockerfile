# Stage 1: Builder
FROM node:18 as builder

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn backstage-cli build

# Stage 2: Runner
FROM node:18-slim

WORKDIR /app

# Copy only built artifacts and dependencies
COPY --from=builder /app ./

# Optional: prune dev dependencies if needed
RUN yarn install --production

EXPOSE 7007

CMD ["yarn", "start"]
