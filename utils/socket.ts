import { Server, type Socket, type ServerOptions } from "socket.io";
import moment from "moment";
import type { H3Event } from "h3";

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
      socket.emit("connection", "Connected to server");
    });
  } catch (err) {
    console.log("Error in initSocket", err);
  }
};
