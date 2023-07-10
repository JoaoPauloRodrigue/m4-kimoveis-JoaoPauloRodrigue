import { Router } from "express";
import {
  createRealEstateController,
  listAllRealEstatesController,
} from "../../controllers";
import {
  validateBodyMiddleware,
  verifyIfIsAdmin,
  verifyIfTokenIsValidateMiddleware,
} from "../../middlewares";
import { realEstateSchemaRequest } from "../../schemas";

const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  verifyIfTokenIsValidateMiddleware,
  verifyIfIsAdmin,
  validateBodyMiddleware(realEstateSchemaRequest),
  createRealEstateController
);

realEstateRouter.get("", listAllRealEstatesController);

export default realEstateRouter;
