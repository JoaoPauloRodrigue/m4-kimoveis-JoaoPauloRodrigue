import { Request, Response } from "express";
import { TRealEstateRequest } from "../../interfaces";
import { RealEstate } from "../../entities";
import {
  createRealEstateService,
  listAllRealEstatesService,
} from "../../services";

const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TRealEstateRequest = req.body;
  const categoryId: number = parseInt(req.body.categoryId);

  const createNewRealEstate: RealEstate = await createRealEstateService(
    payload,
    categoryId
  );
  return res.status(201).json(createNewRealEstate);
};

const listAllRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listAllRealEstates: RealEstate[] = await listAllRealEstatesService();

  return res.status(200).json(listAllRealEstates);
};

export { createRealEstateController, listAllRealEstatesController };
