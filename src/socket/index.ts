import { createServer } from "http";
import { Server } from "socket.io";

import app from "../config/express";
import Socket from "./socketService";

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
const socket = new Socket(io);
socket.startConnection();

export { httpServer, io };
