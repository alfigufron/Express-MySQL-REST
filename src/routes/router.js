import User from './module/user';

export default function routes(app) {
  app.use('/user', User);
}