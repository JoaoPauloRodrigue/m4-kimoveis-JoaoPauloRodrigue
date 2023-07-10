import { Repository } from "typeorm";
import { Address } from "../../entities";
import { AppDataSource } from "../../data-source";

const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);

export default addressRepo;
