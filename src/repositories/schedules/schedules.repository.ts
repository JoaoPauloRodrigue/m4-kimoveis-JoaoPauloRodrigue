import { Repository } from "typeorm";
import { Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";

const schedulesRepo: Repository<Schedule> =
  AppDataSource.getRepository(Schedule);

export default schedulesRepo;
