import { Request, Response } from "express";
import { TSchedulesRequest } from "../../interfaces";
import {
  createSchedulesService,
  propertyVisitAppointmentsService,
} from "../../services";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TSchedulesRequest = req.body;
  const userId: number = Number(res.locals.id);

  const createNewSchedule = await createSchedulesService(payload, userId);
  return res.status(201).json(createNewSchedule);
};

const propertyVisitAppointmentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = Number(req.params.id);

  const listAllSchedules = await propertyVisitAppointmentsService(id);

  return res.status(200).json(listAllSchedules);
};

export { createSchedulesController, propertyVisitAppointmentsController };
