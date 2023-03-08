# Bugnet

Bugs and Issue tracking made easier

#### Getting Started

Ensure you have following things installed in your computer

- nodejs
- postgresql (or any SQL database)

#### Installation

Before installing, open `/server/.env.example` and fill in the empty values. and rename it to `.env`

**Manual**  
Run the following commands

```
cd server && npx prisma db push
```

```
cd server
npm i
npm run dev
```

```
cd client
npm i
npm run dev
```

Head over to `http://localhost:3000`

**Docker**  
You must have docker installed on your computer.
open `/server/docker-compose.yml` and replace the database environments with your database credentials. then run

```
docker compose up --build -d
```

Head over to `http://localhost:3030`

#### Testing

Copy the `.env` file and name it `.env.test` and fill in the values for test database. then run

```
npm run test
```
