import { Server, type Socket, type ServerOptions } from "socket.io";
import moment from "moment";
import type { H3Event } from "h3";
import { userJoin, type User, userLeave, getRoomUsers, getCurrentUser } from "./users";

const options: Partial<ServerOptions> = {
  path: "/api/socket",
  serveClient: false,
};

export const io = new Server(options);

export const initSocket = (event: H3Event) => {
  try {
    //@ts-ignore
    io.attach(event.node.res.socket?.server);
    io.on("connection", (socket: Socket) => {
      console.log("New client connected", socket.id);
      
      socket.on("joinRoom", (payload: User) => {
        const user = userJoin({ ...payload, id: socket.id });
        socket.join(user.room);

        socket.broadcast.to(user.room).emit("message", {
          username: "admin",
          text: `${user.username} has joined the chat`,
          time: moment().format("h:mm a"),
        });
      })

      socket.on("sendMessage", (payload: { text: string }) => {
        const user = getCurrentUser(socket.id);
        console.log("user", user);
        if(user){
          io.to(user.room).emit("message", {
            username: user.username,
            text: payload.text,
            time: moment().format("h:mm a"),
          });
        }
      })

      socket.on("disconnect", ()=>{
        const user = userLeave(socket.id);
        if(user){
          io.to(user.room).emit("message", {
            username: "admin",
            text: `${user.username} has left the chat`,
            time: moment().format("h:mm a"),
          });
          const roomUsers = getRoomUsers(user.room);
          io.to(user.room).emit("roomData", {
            room: user.room,
            users: roomUsers,
          });
        }
      })
      
    })
  } catch (err) {
    console.log("Error in initSocket", err);
  }
};

