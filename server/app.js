const express = require('express');
const cors = require('cors');
const rootRouter = require('./routers');
const { errorHandler } = require('./middlewares/errors');


function createServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());
  
  app.use(rootRouter);
  
  app.use(errorHandler);

  return app;
}


module.exports = createServer;