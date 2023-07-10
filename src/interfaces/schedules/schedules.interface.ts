import { z } from "zod";
import {
  listAllSchedulesSchemaResponse,
  schedulesSchema,
  schedulesSchemaRequest,
  schedulesSchemaResponse,
} from "../../schemas";

type TSchedules = z.infer<typeof schedulesSchema>;

type TSchedulesRequest = z.infer<typeof schedulesSchemaRequest>;

type TSchedulesResponse = z.infer<typeof schedulesSchemaResponse>;

type TListAllSchedulesResponse = z.infer<typeof listAllSchedulesSchemaResponse>;

export {
  TSchedules,
  TSchedulesRequest,
  TSchedulesResponse,
  TListAllSchedulesResponse,
};
