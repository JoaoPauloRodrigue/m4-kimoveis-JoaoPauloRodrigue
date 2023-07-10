import { NextFunction, Request, Response } from "express";
import { realEstateRepo } from "../repositories";
import { AppError } from "../error";

const verifyIfRealEstateExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const realEstateId: number = parseInt(req.params.id);

  const ifIdExist: boolean = await realEstateRepo.exist({
    where: {
      id: realEstateId,
    },
  });

  if (!ifIdExist) {
    throw new AppError("RealEstate not found", 404);
  }

  return next();
};

export default verifyIfRealEstateExistsMiddleware;
