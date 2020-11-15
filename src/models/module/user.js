import sequelizePkg from 'sequelize';
import { db } from '../../config/database';

const
  { DataTypes } = sequelizePkg,
  Model = db.define('User', {
    columnName: DataTypes.STRING(),
    allowNull: false
  }, {
    tableName: 'tableName'
  });

export default Model;