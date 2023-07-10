import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";

const userRepo: Repository<User> = AppDataSource.getRepository(User);

export default userRepo;
