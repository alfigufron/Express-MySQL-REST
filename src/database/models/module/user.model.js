import sequelizePkg from "sequelize";
import { db } from "../../index";

const { DataTypes } = sequelizePkg;

const Model = db.define(
  "user",
  {
    id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
    paranoid: true,
  }
);

export default Model;
