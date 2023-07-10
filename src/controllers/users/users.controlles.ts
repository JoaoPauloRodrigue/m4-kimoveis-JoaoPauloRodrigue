import { Request, Response } from "express";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdatedRequest,
} from "../../interfaces";
import {
  createUserService,
  listAllUsersService,
  softDeleteUserService,
  updatedUserService,
} from "../../services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TUserRequest = req.body;

  const newUser: TUserResponse = await createUserService(payload);

  return res.status(201).json(newUser);
};

const listAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const readAllUsers = await listAllUsersService();

  return res.status(200).json(readAllUsers);
};

const updatedUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TUserUpdatedRequest = req.body;

  const userById: number = parseInt(req.params.id);

  const updatedDataUser = await updatedUserService(userById, payload);

  return res.status(200).json(updatedDataUser);
};

const softDeleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userById: number = parseInt(req.params.id);

  await softDeleteUserService(userById);

  return res.status(204).send();
};

export {
  createUserController,
  listAllUsersController,
  updatedUserController,
  softDeleteUserController,
};
