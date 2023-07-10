import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const verifyIfNotAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const IsAdmin = res.locals.admin;

  const userById = parseInt(res.locals.id);

  const id = parseInt(req.params.id);

  if (req.method === "PATCH") {
    if (!IsAdmin && userById !== id) {
      throw new AppError("Insufficient permission", 403);
    } else if (!IsAdmin && userById == id) {
      return next();
    }
  }
  if (!IsAdmin && userById !== id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default verifyIfNotAdminMiddleware;
