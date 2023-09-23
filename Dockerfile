FROM node:lts-alpine

WORKDIR /app

COPY . .

CMD npm run docker
