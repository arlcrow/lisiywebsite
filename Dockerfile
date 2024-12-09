FROM node:latest AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:latest

WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=8085

EXPOSE 8085

COPY --from=build /app .

CMD ["node", "dist/server/entry.mjs"]
