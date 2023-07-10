import { RealEstate } from "../../entities";
import { realEstateRepo } from "../../repositories";

const listAllRealEstatesService = async (): Promise<RealEstate[]> => {
  const realEstate: RealEstate[] | null = await realEstateRepo.find({
    relations: {
      address: true,
    },
  });

  return realEstate;
};

export default listAllRealEstatesService;
