import { Server } from "socket.io";

export default function InitializeSocket(io: Server) {
  io.on("connection", (socket) => {
    console.log("New user connected");

    socket.on("disconnect", () => {
      console.log("User Disconnected");
    });
  });
}
