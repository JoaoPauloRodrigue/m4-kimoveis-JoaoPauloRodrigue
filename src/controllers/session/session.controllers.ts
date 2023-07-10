import { Request, Response } from "express";
import { TSessionRequest } from "../../interfaces";
import { createSessionTokenService } from "../../services";

const createSessionTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TSessionRequest = req.body;

  const token = await createSessionTokenService(payload);

  return res.status(200).json({ token });
};

export default createSessionTokenController;
