FROM node:22.16-alpine AS base
# pnpm 설치
RUN npm install -g pnpm@10
WORKDIR /app

FROM base AS development-dependencies-env
COPY . .
RUN pnpm install

FROM base AS production-dependencies-env
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

FROM base AS build-env
COPY --from=development-dependencies-env /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM base AS final
COPY package.json pnpm-lock.yaml ./
COPY --from=production-dependencies-env /app/node_modules ./node_modules
COPY --from=build-env /app/build ./build

CMD ["pnpm", "run", "start"]
