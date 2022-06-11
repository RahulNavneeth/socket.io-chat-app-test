import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    io.emit(`message-${data.room}`, {
      id: socket.id,
      message: data.message,
      type: "message",
      name: data.name,
    });
  });
});

io.listen(3001);
