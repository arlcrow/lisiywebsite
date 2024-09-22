FROM oven/bun:latest AS build

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:latest AS runtime

ENV HOST=0.0.0.0
ENV PORT=8085

EXPOSE 8085

COPY --from=build /app /app

CMD ["bun", "run", "/app/dist/server/entry.mjs"]
