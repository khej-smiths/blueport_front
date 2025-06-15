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

# === [여기서부터 ARG 선언] ===
ARG VITE_PUBLIC_API_ENDPOINT
ARG VITE_PUBLIC_OPEN_API_ENDPOINT
ARG VITE_PUBLIC_OPEN_API_KEY
ARG VITE_PUBLIC_VERIFICATION_CODE

FROM base AS build-env
COPY --from=development-dependencies-env /app/node_modules ./node_modules
COPY . .

# 빌드 시점에 환경변수 전달
ENV VITE_PUBLIC_API_ENDPOINT=$VITE_PUBLIC_API_ENDPOINT
ENV VITE_PUBLIC_OPEN_API_ENDPOINT=$VITE_PUBLIC_OPEN_API_ENDPOINT
ENV VITE_PUBLIC_OPEN_API_KEY=$VITE_PUBLIC_OPEN_API_KEY
ENV VITE_PUBLIC_VERIFICATION_CODE=$VITE_PUBLIC_VERIFICATION_CODE

RUN pnpm run build

FROM base AS final
COPY package.json pnpm-lock.yaml ./
COPY --from=production-dependencies-env /app/node_modules ./node_modules
COPY --from=build-env /app/build ./build

CMD ["pnpm", "run", "start"]
