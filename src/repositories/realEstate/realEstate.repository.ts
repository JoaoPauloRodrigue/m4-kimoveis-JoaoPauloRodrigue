import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";

const realEstateRepo: Repository<RealEstate> =
  AppDataSource.getRepository(RealEstate);

export default realEstateRepo;
