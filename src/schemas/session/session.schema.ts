import { z } from "zod";

const sessionSchema = z.object({
  email: z.string().email().max(45),
  password: z.string().max(120),
});

const sessionSchemaRequest = sessionSchema;

const sessionSchemaResponse = z.object({
  token: z.string(),
});

export { sessionSchema, sessionSchemaRequest, sessionSchemaResponse };
