import { User } from "../../entities";
import { TUserRequest, TUserResponse } from "../../interfaces";
import { userRepo } from "../../repositories";
import { userSchemaResponse } from "../../schemas";

const createUserService = async (
  payload: TUserRequest
): Promise<TUserResponse> => {
  const user: User = userRepo.create(payload);

  await userRepo.save(user);

  const userResult: TUserResponse = userSchemaResponse.parse(user);

  return userResult;
};

export default createUserService;
