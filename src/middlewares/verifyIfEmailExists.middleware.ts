import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { TUsers } from "../interfaces";
import { userRepo } from "../repositories";

const verifyIfEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<TUsers | void> => {
  const payloadEmail = req.body.email;

  if (payloadEmail) {
    const emailExist: boolean = await userRepo.exist({
      where: {
        email: payloadEmail,
      },
    });

    if (emailExist) {
      throw new AppError("Email already exists", 409);
    }
  }

  return next();
};

export default verifyIfEmailExistsMiddleware;
