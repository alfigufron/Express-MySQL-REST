import { UserModel } from "../../database/models";
import { ErrorHandler, httpResponse } from "../../config/http";
import { dbTransaction, offsetPagination, pagination } from "../../database";

export default {
  all: async (req, res, next) => {
    try {
      const { page = 1, limit = 10 } = req.query;

      let data = await UserModel.findAndCountAll({
        limit: Number(limit),
        offset: offsetPagination(page, limit),
      });

      data = pagination(data, page, limit);

      httpResponse(res, "Get All User Successfully", data);
    } catch (err) {
      next(new ErrorHandler(err.message, err.data, err.status));
    }
  },

  create: async (req, res, next) => {
    const t = await dbTransaction();

    try {
      const { name, email, password } = req.body;

      const user = await UserModel.create({
        name,
        email,
        password,
      });

      t.commit();

      httpResponse(res, "success", "Create User Successfully", user, 201);
    } catch (err) {
      t.rollback();

      next(new ErrorHandler(err.message, err.data, err.status));
    }
  },

  detail: async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await UserModel.findByPk(id);
      if (!data) throw new ErrorHandler("Data Not Found", 404);

      httpResponse(res, "success", "Get Detail User Successfully", data);
    } catch (err) {
      next(new ErrorHandler(err.message, err.data, err.status));
    }
  },

  update: async (req, res, next) => {
    const t = await dbTransaction();

    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const data = await UserModel.findByPk(id);
      if (!data) throw new ErrorHandler("Data Not Found", 404);

      await UserModel.update({ name, email, password }, { where: { id } });

      t.commit();

      httpResponse(res, "success", "Update User Successfully");
    } catch (err) {
      t.rollback();

      next(new ErrorHandler(err.message, err.data, err.status));
    }
  },

  delete: async (req, res, next) => {
    const t = await dbTransaction();

    try {
      const { id } = req.params;

      const data = await UserModel.findByPk(id);
      if (!data) throw new ErrorHandler("Data Not Found", 404);

      await UserModel.destroy({ where: { id } });

      t.commit();

      httpResponse(res, "success", "Delete User Successfully");
    } catch (err) {
      t.rollback();

      next(new ErrorHandler(err.message, err.data, err.status));
    }
  },
};
