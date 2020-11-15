import express from 'express';

import router from './routes/router';
import { check } from './config/database';

const
  app = express(),
  port = 3000;

check();
router(app);
  
app.listen(port, () => {
  console.log(`\nServer Running at http://localhost:${port}/ or http://127.0.0.1:${port}/`)
});