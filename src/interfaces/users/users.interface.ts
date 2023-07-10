import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../../schemas";

type TUsers = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

type TListAllUsersResponse = z.infer<typeof usersSchemaResponse>;

type TUserUpdatedRequest = DeepPartial<TUserRequest>;

export {
  TUsers,
  TUserRequest,
  TUserResponse,
  TListAllUsersResponse,
  TUserUpdatedRequest,
};
