FROM oven/bun:1 AS build

WORKDIR /temp/dev

COPY package.json bun.lock /temp/dev/

RUN bun install && bun astro build

FROM oven/bun:1

WORKDIR /temp/dev

COPY --from=build /temp/dev/node_modules /temp/dev/node_modules

COPY --from=build /temp/dev/dist /temp/dev/dist

CMD ["bun", "run", "/temp/dev/dist/server/entry.mjs"]
