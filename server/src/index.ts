import server from "./config";

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
