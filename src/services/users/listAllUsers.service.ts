import { User } from "../../entities";
import { TListAllUsersResponse } from "../../interfaces";
import { userRepo } from "../../repositories";
import { usersSchemaResponse } from "../../schemas";

const listAllUsersService = async (): Promise<TListAllUsersResponse> => {
  let listAllUsers: User[] | undefined;

  listAllUsers = await userRepo.find();

  const usersResponse: TListAllUsersResponse =
    usersSchemaResponse.parse(listAllUsers);

  return usersResponse;
};

export default listAllUsersService;
