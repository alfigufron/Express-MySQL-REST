import { UserModel } from "../../database/models";
import { ErrorHandler, httpResponse } from "../../config/http";
import { offsetPagination, pagination } from "../../database";

export default {
  all: async (req, res, next) => {
    try {
      const { page = 1, limit = 10 } = req.query;

      let data = await UserModel.findAndCountAll({
        limit: Number(limit),
        offset: offsetPagination(page, limit),
      });

      data = pagination(data, page, limit);

      httpResponse(res, "success", "Get All User Successfully", data);
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

      httpResponse(res, "success", "Create User Successfully", user, 201);
    } catch (err) {
      next(new ErrorHandler(err.message, err.status || 500));
    }
  },

  detail: async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await UserModel.findByPk(id);
      if (!data) throw new ErrorHandler("Data Not Found", 404);

      httpResponse(res, "success", "Get Detail User Successfully", data);
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

      httpResponse(res, "success", "Update User Successfully");
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

      httpResponse(res, "success", "Delete User Successfully");
    } catch (err) {
      next(new ErrorHandler(err.message, err.status || 500));
    }
  },
};
