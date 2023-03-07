FROM node:16-alpine

WORKDIR /app/Bugnet/client

COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN npm run build
