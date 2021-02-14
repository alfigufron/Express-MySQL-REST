import express from 'express';
import bodyParser from 'body-parser';

import router from './router';
// import { check } from './config/database';
import { ExampleMiddleware } from './middleware';

// eslint-disable-next-line no-multi-assign, func-names
express.application.prefix = express.Router.prefix = function (path, configure) {
  const prefixRouter = express.Router();
  this.use(path, prefixRouter);
  configure(prefixRouter);

  return prefixRouter;
};

const app = express();
const port = 3000;

// check();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(ExampleMiddleware);

router(app);

app.listen(
  process.env.PORT || port,
  () => console.log(`\nServer Running at http://localhost:${port}/ or http://127.0.0.1:${port}/`),
);
