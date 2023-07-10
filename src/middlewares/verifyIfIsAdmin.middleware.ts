import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const verifyIfIsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const payloadAdmin = res.locals.admin;

  const userById = Number(res.locals.id);

  if (!payloadAdmin && userById) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};

export default verifyIfIsAdmin;
