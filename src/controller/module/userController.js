import { UserModel } from "../../database/models";
import {
  ErrorHandler,
  httpSuccess,
  httpSuccessWithData,
} from "../../config/http";

export default {
  getAll: async (req, res, next) => {
    try {
      const data = await UserModel.findAll();

      httpSuccessWithData(res, "Get All User Successfully", data);
    } catch (err) {
      next(new ErrorHandler(err.message, err.status || 500));
    }
  },

  create: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      const user = await UserModel.create({
        name,
        email,
        password,
      });

      httpSuccessWithData(res, "Create User Successfully", user);
    } catch (err) {
      next(new ErrorHandler(err.message, err.status || 500));
    }
  },

  detail: async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await UserModel.findByPk(id);
      if (!data) throw new ErrorHandler("Data Not Found", 404);

      httpSuccessWithData(res, "Get Detail User Successfully", data);
    } catch (err) {
      next(new ErrorHandler(err.message, err.status || 500));
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const data = await UserModel.findByPk(id);
      if (!data) throw new ErrorHandler("Data Not Found", 404);

      await UserModel.update({ name, email, password }, { where: { id } });

      httpSuccess(res, "Update User Successfully");
    } catch (err) {
      next(new ErrorHandler(err.message, err.status || 500));
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await UserModel.findByPk(id);
      if (!data) throw new ErrorHandler("Data Not Found", 404);

      await UserModel.destroy({ where: { id } });

      httpSuccess(res, "Delete User Successfully");
    } catch (err) {
      next(new ErrorHandler(err.message, err.status || 500));
    }
  },
};
