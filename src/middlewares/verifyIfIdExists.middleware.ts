import { NextFunction, Request, Response } from "express";
import { TUsers } from "../interfaces";
import { realEstateRepo, userRepo } from "../repositories";
import { AppError } from "../error";

const verifyIfIdExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<TUsers | void> => {
  if (req.method === "POST" && req.baseUrl === "/schedules") {
    const realEstateId: number = parseInt(req.body.realEstateId);
    const IfIdExist = await realEstateRepo.findOneBy({
      id: realEstateId,
    });

    if (!IfIdExist) {
      throw new AppError("RealEstate not found", 404);
    }

    return next();
  }

  const payloadId: number = parseInt(req.params.id);

  const id: boolean = await userRepo.exist({
    where: {
      id: payloadId,
    },
  });

  if (!id) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default verifyIfIdExistMiddleware;
