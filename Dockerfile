FROM node:lts AS build
WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM denoland/deno:alpine AS runtime

ENV HOST=0.0.0.0
ENV PORT=8085

EXPOSE 8085

COPY --from=build /app /app

CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "/app/dist/server/entry.mjs"]
