import { Router } from "express";
import {
  validateBodyMiddleware,
  verifyIfIsAdmin,
  verifyIfNameExistsMiddleware,
  verifyIfTokenIsValidateMiddleware,
} from "../../middlewares";
import { categoriesSchemaRequest } from "../../schemas";
import {
  createCategoriesController,
  listAllCategoriesController,
  listAllRealEstateByCategoriesController,
} from "../../controllers";

const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  validateBodyMiddleware(categoriesSchemaRequest),
  verifyIfTokenIsValidateMiddleware,
  verifyIfNameExistsMiddleware,
  verifyIfIsAdmin,
  createCategoriesController
);

categoriesRouter.get("", listAllCategoriesController);

categoriesRouter.get(
  "/:id/realEstate",
  listAllRealEstateByCategoriesController
);

export default categoriesRouter;
