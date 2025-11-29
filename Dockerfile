# ---------- deps stage: install dependencies ----------
FROM node:22.14-alpine AS deps
WORKDIR /app

# install corepack/pnpm and use it to install deps
RUN corepack enable && corepack prepare pnpm@latest --activate

# copy only lockfiles / package.json for fast rebuilds
COPY package.json pnpm-lock.yaml ./
# if you use workspace or pnpm-workspace.yaml, copy that too
# COPY pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

# ---------- base stage (optional common setup) ----------
FROM node:22.14-alpine AS base
WORKDIR /app
# keep same corepack/pnpm availability (optional)
RUN corepack enable && corepack prepare pnpm@latest --activate

# ---------- build stage: build the app ----------
FROM base AS build
WORKDIR /app

# copy source
COPY . .

# make build-time env available for prisma generate
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# prisma generate (adjust path if your schema output dir differs)
RUN pnpm prisma generate

# optional debug to ensure generated client exists
RUN ls -R src/generated || echo "NO GENERATED CLIENT FOUND"

# Next build
RUN pnpm build

# ---------- runner stage: production image ----------
FROM node:22.14-alpine AS runner
WORKDIR /app

# ensure pnpm is available in runner to run start script (corepack included in node 22)
RUN corepack enable && corepack prepare pnpm@latest --activate

ENV NODE_ENV=production

# copy built artifacts & production deps
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=deps  /app/node_modules ./node_modules

# copy generated prisma client and prisma schema if needed at runtime
COPY --from=build /app/src/generated ./src/generated
COPY --from=build /app/prisma ./prisma

EXPOSE 3000

# Use pnpm start (assumes package.json has start script e.g. "next start")
CMD ["pnpm", "start"]
