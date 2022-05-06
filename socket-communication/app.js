const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const { SECRET_KEY_JWT } = require('../secret');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 5000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.use((socket, next) => { // Autenticação, pode apagar para testar apenas o socket
  try {
    if (!socket.handshake.query || !socket.handshake.query.token)
      return next(new Error('Authentication error'));

    jwt.verify(socket.handshake.query.token, SECRET_KEY_JWT, (err, decoded) => {
      if (err) return next(new Error('Authentication error'));

      socket.decoded = decoded;

      next();
    });

  } catch (err) {
    next(new Error('Authentication error'));
  }
})
  .on("connection", (socket) => {
    try {
      socket.on("join_room", (data) => socket.join(data));

      socket.on("send_message", (data) => socket.to(data.room).emit("receive_message", data));

      socket.on("disconnect", () => console.log("User Disconnected", socket.id));
    } catch (err) {
      console.error(err)
    }
  });

server.listen(PORT, () => console.log(`Server on at http://localhost:${PORT}/`));