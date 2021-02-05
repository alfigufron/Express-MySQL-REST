import express from 'express';
import bodyParser from 'body-parser';

import router from './router';
import { check } from './config/database';
import { ExampleMiddleware } from './middleware';

express.application.prefix = express.Router.prefix = function (path, config) {
  let router = express.Router();
  this.use(path, router);
  config(router);

  return router;
}

const
  app = express(),
  port = 3000;

check();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(ExampleMiddleware);

router(app);
  
app.listen(
  process.env.PORT || port,
  () => console.log(`\nServer Running at http://localhost:${port}/ or http://127.0.0.1:${port}/`)
);