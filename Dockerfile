# ==================================
# Base Stage
# ==================================
FROM node:22.14.0-alpine AS base

# Enable pnpm using corepack (the modern, built-in way)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set the working directory
WORKDIR /app

# ==================================
# Development Stage
# ==================================
FROM base AS dev

# Copy only the files needed for dependency installation to leverage caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies.
# --ignore-scripts prevents the 'postinstall' (e.g., prisma generate) from running here.
# We run it manually later for better control during the build process.
RUN pnpm install --no-frozen-lockfile --ignore-scripts

# Now copy the rest of your application source code
COPY . .

# Manually generate the Prisma client. It will continue gracefully if no schema is found.
# This is safer than running it in `postinstall` during the initial `pnpm install`.
RUN pnpm prisma generate || true

# Expose the port your app will run on
EXPOSE 3000

# Set a default environment variable. Can be overridden in docker-compose.yml.
ENV NEXT_TELEMETRY_DISABLED=1

# The command to start the development server with hot-reloading
CMD ["pnpm", "dev"]