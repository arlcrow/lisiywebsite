FROM node:latest AS build

WORKDIR /app

COPY package.json bun.lockb ./

RUN yarn install

COPY . .

RUN yarn run build

FROM node:latest AS runtime

ENV HOST=0.0.0.0
ENV PORT=8085

EXPOSE 8085

COPY --from=build /app /app

CMD ["node", "/app/dist/server/entry.mjs"]
