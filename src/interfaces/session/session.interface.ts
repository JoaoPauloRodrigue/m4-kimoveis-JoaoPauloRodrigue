import { z } from "zod";
import {
  sessionSchema,
  sessionSchemaRequest,
  sessionSchemaResponse,
} from "../../schemas";

type TSession = z.infer<typeof sessionSchema>;

type TSessionRequest = z.infer<typeof sessionSchemaRequest>;

type TSessionResponse = z.infer<typeof sessionSchemaResponse>;

export { TSession, TSessionRequest, TSessionResponse };
