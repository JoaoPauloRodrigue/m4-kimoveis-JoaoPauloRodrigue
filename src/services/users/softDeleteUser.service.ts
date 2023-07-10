import { User } from "../../entities";
import { userRepo } from "../../repositories";

const softDeleteUserService = async (userById: number): Promise<void> => {
  const userDelete: User | null = await userRepo.findOneBy({
    id: userById,
  });

  await userRepo.softRemove(userDelete!);
};

export default softDeleteUserService;
