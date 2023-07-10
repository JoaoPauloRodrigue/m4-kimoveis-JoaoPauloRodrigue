import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { TUsers } from "../interfaces";
import { categoriesRepo } from "../repositories";

const verifyIfNameExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<TUsers | void> => {
  const payloadName = req.body.name;

  if (payloadName) {
    const nameExist: boolean = await categoriesRepo.exist({
      where: {
        name: payloadName,
      },
    });

    if (nameExist) {
      throw new AppError("Category already exists", 409);
    }
  }

  return next();
};

export default verifyIfNameExistsMiddleware;
