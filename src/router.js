import { UserController } from './controllers';

export default function routes(app) {
  app.get('/', (req, res) => res.send(200));

  app.prefix('/user', (user) => {
    user.route('/').get(UserController.getAll);
  });
}