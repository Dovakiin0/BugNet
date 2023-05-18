FROM node:20-alpine

WORKDIR /app/Bugnet/server

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npx prisma generate
RUN npx prisma migrate deploy

EXPOSE 3030
CMD ["node", "dist/index.js"]

