const http    = require('http');
const express = require('express');
const routes  = require('./routes');
const { Server }   = require('socket.io');
const { postgres } = require('./connections');
const { middlewareCors } = require('./middlewares');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(middlewareCors);
app.use('/api/v1', routes);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const data = [];

io.on('connection', (socket) => {
  data.push(socket);

  // code... 

})

postgres.authenticate()
  .then(() => console.log('Successful connection'))
  .catch((err) => console.log('Error connection: ', err));

server.listen(PORT, () => console.log(`Server on at http://localhost:${PORT}/`));