FROM node:20-alpine

WORKDIR /app/Bugnet/client

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build
