import { Schedule } from "../../entities";
import { TSchedules } from "../../interfaces";
import { realEstateRepo, schedulesRepo, userRepo } from "../../repositories";
import { schedulesSchemaResponse } from "../../schemas";

const propertyVisitAppointmentsService = async (
  id: number
): Promise<TSchedules> => {
  let listAllPropertyVisit: Schedule[] | undefined;

  let realEstate = await realEstateRepo.findOneBy({
    id: id,
  });

  listAllPropertyVisit = await schedulesRepo.find({
    where: {
      id: id,
    },
    relations: {
      realEstate: true,
      user: true,
    },
  });

  const schedulesResponse = schedulesSchemaResponse.parse(listAllPropertyVisit);

  return schedulesResponse;
};

export default propertyVisitAppointmentsService;
