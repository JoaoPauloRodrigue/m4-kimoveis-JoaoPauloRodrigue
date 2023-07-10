import { z } from "zod";

const schedulesSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int().positive(),
  userId: z.number().int().positive(),
});

const schedulesSchemaRequest = schedulesSchema.omit({
  id: true,
  userId: true,
});

const schedulesSchemaResponse = schedulesSchema;

const listAllSchedulesSchemaResponse = z.array(schedulesSchemaResponse);

export {
  schedulesSchema,
  schedulesSchemaRequest,
  schedulesSchemaResponse,
  listAllSchedulesSchemaResponse,
};
