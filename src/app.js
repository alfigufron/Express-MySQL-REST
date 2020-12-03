import express from 'express';
import bodyParser from 'body-parser';

import router from './router';
import { check } from './config/database';
import { ExampleMiddleware } from './middleware';

const
  app = express(),
  port = 3000;

check();

app.use(bodyParser);
app.use(ExampleMiddleware);

router(app);
  
app.listen(port, () => {
  console.log(`\nServer Running at http://localhost:${port}/ or http://127.0.0.1:${port}/`)
});