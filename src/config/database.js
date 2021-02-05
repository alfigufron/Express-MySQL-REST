import { Sequelize } from 'sequelize';

const development = {
  user: 'root',
  pass: 'pass1234',
  host: '127.0.0.1',
  db: 'crud-laravel-api',
};

// const production = {
//   user: '',
//   pass: '',
//   host: '',
//   db: '',
// };

const db = new Sequelize(
  development.db,
  development.user,
  development.pass,
  {
    host: development.host,
    dialect: 'mysql',
    logging: false,
  },
);

function check() {
  console.clear();
  try {
    db.authenticate();
    console.log('\nConnect Database Successfully!\n');
  } catch (e) {
    db.close();
    console.log(`\nConnect Database Error!\n${e}\n`);
  }
}

export { db, check };
