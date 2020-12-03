import User from './routes/user';

export default function routes(app) {
  app.use('/user', User);
}