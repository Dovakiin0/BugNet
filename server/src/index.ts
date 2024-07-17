import server from "./config";
import dotenv from "dotenv";
dotenv.config();

const PORT = 3030 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
