import { Notification } from "@prisma/client";
import { Server } from "socket.io";
import prisma from "../helper/prismaClient";

export default function InitializeSocket(io: Server) {
  io.on("connection", (socket) => {
    // socket.on("disconnect", () => {
    //   console.log("User Disconnected");
    // });

    socket.on("TEAM_ADD", async (data: any) => {
      try {
        const notification = await prisma.notification.create({
          data: {
            from: data.From.id,
            to: data.User.id,
            message: `${data.From.username} invited you to project ${data.Project.title}`,
            target_id: data.Project.id,
          },
          include: {
            From: {
              select: {
                username: true,
                id: true,
              },
            },
            To: {
              select: {
                username: true,
                id: true,
              },
            },
          },
        });
        io.emit("TEAM_ADD_RESPONSE", notification);
      } catch (err) {
        console.log("Error creating notification");
      }
    });

    socket.on("COMMENT", (data) => {
      io.emit("COMMENT_RESPONSE", data);
    });

    socket.on("KANBAN", async (data) => {
      try {
        const bug = await prisma.bug.update({
          where: {
            id: data.bugId,
          },
          data: {
            boardId: data.boardId,
          },
        });
        io.emit("KANBAN_RESPONSE", bug);
      } catch (error) {
        console.log("Error changing bug board");
      }
    });
  });
}
