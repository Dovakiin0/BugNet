FROM node:16-alpine

WORKDIR /app/Bugnet/server

COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN npm run build
RUN npx prisma generate

EXPOSE 3030
CMD ["node", "dist/index.js"]

