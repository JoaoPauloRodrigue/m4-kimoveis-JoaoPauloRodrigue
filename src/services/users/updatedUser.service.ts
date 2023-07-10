import { User } from "../../entities";
import { TUserResponse, TUserUpdatedRequest } from "../../interfaces";
import { userRepo } from "../../repositories";
import { userSchemaResponse } from "../../schemas";

const updatedUserService = async (
  userById: number,
  payload: TUserUpdatedRequest
): Promise<TUserResponse> => {
  const userDataNotUpdated: User | null = await userRepo.findOneBy({
    id: userById,
  });

  const updateUserData: User = userRepo.create({
    ...userDataNotUpdated,
    ...payload,
  });

  await userRepo.save(updateUserData);

  const userUpdated: TUserResponse = userSchemaResponse.parse(updateUserData);

  return userUpdated;
};

export default updatedUserService;
