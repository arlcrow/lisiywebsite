FROM oven/bun:1 AS build

WORKDIR /temp/dev

COPY package.json bun.lock /temp/dev/

RUN bun install && bun astro build

FROM oven/bun:1 AS prod

WORKDIR /app

COPY --from=build /temp/dev/node_modules /app/node_modules

COPY --from=build /temp/dev/dist /app/dist

CMD ["bun", "run", "/app/dist/server/entry.mjs"]
