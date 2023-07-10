import { Router } from "express";
import {
  createUserController,
  listAllUsersController,
  softDeleteUserController,
  updatedUserController,
} from "../../controllers";
import {
  validateBodyMiddleware,
  verifyIfEmailExistsMiddleware,
  verifyIfIdExistMiddleware,
  verifyIfIsAdmin,
  verifyIfNotAdminMiddleware,
  verifyIfTokenIsValidateMiddleware,
} from "../../middlewares";
import { userSchemaRequest, userSchemaUpdated } from "../../schemas";

const usersRouter: Router = Router();

usersRouter.post(
  "",
  validateBodyMiddleware(userSchemaRequest),
  verifyIfEmailExistsMiddleware,
  createUserController
);

usersRouter.get(
  "",
  verifyIfTokenIsValidateMiddleware,
  verifyIfIsAdmin,
  listAllUsersController
);

usersRouter.patch(
  "/:id",
  verifyIfTokenIsValidateMiddleware,
  verifyIfIdExistMiddleware,
  verifyIfNotAdminMiddleware,
  validateBodyMiddleware(userSchemaUpdated),
  verifyIfEmailExistsMiddleware,
  updatedUserController
);

usersRouter.delete(
  "/:id",
  verifyIfTokenIsValidateMiddleware,
  verifyIfIdExistMiddleware,
  verifyIfNotAdminMiddleware,
  softDeleteUserController
);

export default usersRouter;
