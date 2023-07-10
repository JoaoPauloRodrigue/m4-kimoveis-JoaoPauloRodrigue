import { RealEstate } from "../../entities";
import { realEstateRepo } from "../../repositories";

const propertyVisitAppointmentsService = async (
  id: number
): Promise<RealEstate[]> => {
  return await realEstateRepo
    .createQueryBuilder("re")
    .leftJoinAndSelect("re.address", "a")
    .leftJoinAndSelect("re.category", "c")
    .leftJoinAndSelect("re.schedule", "s")
    .leftJoinAndSelect("s.user", "u")
    .where("re.id = :id", { id: id })
    .getMany();
};

export default propertyVisitAppointmentsService;
