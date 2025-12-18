# ---------- deps ----------
FROM node:22.14-alpine AS deps
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---------- build ----------
FROM node:22.14-alpine AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .
COPY --from=deps /app/node_modules ./node_modules

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN pnpm prisma generate
RUN pnpm build
RUN pnpm build:worker

# ---------- runner ----------
FROM node:22.14-alpine AS runner
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

ENV NODE_ENV=production

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=deps  /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/src/generated ./src/generated
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["pnpm", "start"]
