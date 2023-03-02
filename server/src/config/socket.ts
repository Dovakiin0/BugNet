import { Server } from "socket.io";

export default function InitializeSocket(io: Server) {
  io.on("connection", (socket) => {
    // socket.on("disconnect", () => {
    //   console.log("User Disconnected");
    // });

    socket.on("TEAM_ADD", (data) => {
      console.log(data);
      io.emit("TEAM_ADD_RESPONSE", data);
    });

    socket.on("COMMENT", (data) => {
      io.emit("COMMENT_RESPONSE", data);
    });
  });
}
