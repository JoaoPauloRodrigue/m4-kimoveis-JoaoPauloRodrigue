import { Router } from "express";
import { sessionSchema } from "../../schemas";
import { validateBodyMiddleware } from "../../middlewares";
import { createSessionTokenController } from "../../controllers";

const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  validateBodyMiddleware(sessionSchema),
  createSessionTokenController
);

export default sessionRouter;
