import { AppError } from "../../error";
import {
  TSchedules,
  TSchedulesRequest,
  TSchedulesResponse,
} from "../../interfaces";
import { schedulesRepo } from "../../repositories";
import { schedulesSchemaResponse } from "../../schemas";

const createSchedulesService = async (
  payload: TSchedulesRequest,
  userId: number
): Promise<TSchedules> => {
  let user = userId;
  let day = payload.date;

  let newData = new Date(day);

  let dayOfTheWeek = newData.getDay();

  if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  let hour = payload.hour.substring(0, 2);

  let newHour = Number(hour);
  if (newHour >= 8 || newHour <= 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const createSchedule = schedulesRepo.create({
    ...payload,
  });

  await schedulesRepo.save(createSchedule);

  const scheduleResult: TSchedulesResponse =
    schedulesSchemaResponse.parse(createSchedule);

  return scheduleResult;
};

export default createSchedulesService;
