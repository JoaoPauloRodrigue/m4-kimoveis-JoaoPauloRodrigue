import { Router } from "express";
import {
  createSchedulesController,
  propertyVisitAppointmentsController,
} from "../../controllers";
import {
  validateBodyMiddleware,
  verifyIfIdExistMiddleware,
  verifyIfIsAdmin,
  verifyIfRealEstateExistsMiddleware,
  verifyIfTokenIsValidateMiddleware,
} from "../../middlewares";
import { schedulesSchemaRequest } from "../../schemas";

const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  verifyIfTokenIsValidateMiddleware,
  validateBodyMiddleware(schedulesSchemaRequest),
  verifyIfIdExistMiddleware,
  createSchedulesController
);

schedulesRouter.get(
  "/realEstate/:id",
  verifyIfTokenIsValidateMiddleware,
  verifyIfRealEstateExistsMiddleware,
  verifyIfIsAdmin,
  propertyVisitAppointmentsController
);

export default schedulesRouter;
