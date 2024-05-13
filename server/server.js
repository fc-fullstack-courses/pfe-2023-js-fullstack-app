const http = require('http');
const { Server } = require('socket.io');
const app = require('./app')();
const config = require('./configs/server.json');
const { Message } = require('./models');

const server = http.createServer(app);

const host = config.HOST;
const port = config.PORT;

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// on - аналог addEventListener
// 1 агрумент - назва події (стрінга)
// 2 аргумент - обробник події, приймає своїм параметром об'єкт сокета
io.on('connection', function (socket) {
  // socket - екземпляр з'єднання кліента з серваком

  console.log('client connected');

  // додаємо слухач події з клієнту
  socket.on('buttonClick', (obj, num, bool, nullVar) => {
    console.log(`data is :`);
    console.log(obj);
    console.log(num);
    console.log(bool);
    console.log(nullVar);

    // відправляє подію buttonClick конкретному сокету (аналог res.send)
    // socket.emit('buttonClick', 'some user bressed button');

    // відправляє подію buttonClick усім під'єданим клієнтам одночасно
    io.emit('buttonClick', 'some user bressed button');
  });

  socket.on('newChatMessage', async ({ author, ...restMessage }) => {
    try {
      const newMessage = await Message.create({
        ...restMessage,
        author: author._id,
      });

      io.emit('newMessage', { newMessage, author });
    } catch (error) {
      socket.emit('newMessageError', error);
    }
  });
});

server.listen(port, host, () => {
  console.log(`server started - ${host}:${port}`);
});
