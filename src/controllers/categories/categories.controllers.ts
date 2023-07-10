import { Request, Response } from "express";
import { TCategoriesRequest, TCategoriesResponse } from "../../interfaces";
import { Category } from "../../entities";
import {
  createCategoriesService,
  listAllCategoriesService,
  listAllRealEstateByCategoriesService,
} from "../../services";

const createCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TCategoriesRequest = req.body;

  const newCategories: TCategoriesResponse = await createCategoriesService(
    payload
  );
  return res.status(201).json(newCategories);
};

const listAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const ListAllCategories = await listAllCategoriesService();

  return res.status(200).json(ListAllCategories);
};

const listAllRealEstateByCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryId: number = parseInt(req.params.id);

  const ListAllByCategories: Category =
    await listAllRealEstateByCategoriesService(categoryId);

  return res.status(200).json(ListAllByCategories);
};

export {
  createCategoriesController,
  listAllCategoriesController,
  listAllRealEstateByCategoriesController,
};
