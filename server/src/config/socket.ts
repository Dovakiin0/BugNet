import { Server } from "socket.io";

export default function InitializeSocket(io: Server) {
  io.on("connection", (socket) => {
    // socket.on("disconnect", () => {
    //   console.log("User Disconnected");
    // });

    socket.on("TEAM_ADD", (data) => {
      socket.emit("TEAM_ADD_RESPONSE", data);
    });
  });
}
