import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";

const categoriesRepo: Repository<Category> =
  AppDataSource.getRepository(Category);

export default categoriesRepo;
