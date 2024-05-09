const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const config = require('./configs/server.json');

const server = http.createServer(app);

const host = config.HOST;
const port = config.PORT;

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

// on - аналог addEventListener
// 1 агрумент - назва події (стрінга)
// 2 аргумент - обробник події, приймає своїм параметром об'єкт сокета
io.on('connection', function (socket) {
  // socket - екземпляр з'єднання кліента з серваком

  console.log('client connected');
  console.log(socket);
});

server.listen(port, host, () => {
  console.log(`server started - ${host}:${port}`);
});
