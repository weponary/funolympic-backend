import { commnetService } from "../Comment";

export interface ISocketService {
  startConnection(): void;
}

export default class Socket implements ISocketService {
  private _io;
  private _users: any;
  private _socket: any;
  constructor(protected io: any) {
    this._io = io;
    this._users = {};
  }

  startConnection(): void {
    this._io.on("connection", (socket: any) => {
      this._socket = socket;

      socket.on("user_connected", ({ email, liveId }: any) => {
        this._socket.join(liveId);
        this._users[email] = socket.id;
      });
      socket.on(
        "comment",
        async ({ content, liveId, userId, firstName }: any) => {
          socket.to(liveId).emit("broadcast-message", { firstName, content });
          await commnetService.create({ content: content }, userId, liveId);
        }
      );
      socket.on("disconnect", () => {
        this._users = Object.fromEntries(
          Object.entries(this._users).filter(
            ([key, value]) => value != socket.id
          )
        );
      });
    });
  }
}
