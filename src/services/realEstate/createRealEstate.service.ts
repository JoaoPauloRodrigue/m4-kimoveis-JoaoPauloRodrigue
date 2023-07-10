import { Category, RealEstate } from "../../entities";
import { AppError } from "../../error";
import { TAddress, TRealEstateRequest } from "../../interfaces";
import {
  addressRepo,
  categoriesRepo,
  realEstateRepo,
} from "../../repositories";

const createRealEstateService = async (
  payload: TRealEstateRequest,
  categoryId: number
): Promise<RealEstate> => {
  const verifyIfAddressExists = await addressRepo.findOne({
    where: {
      street: payload.address.street!,
      zipCode: payload.address.zipCode!,
      number: payload.address.number!,
      city: payload.address.city!,
      state: payload.address.state!,
    },
  });

  if (verifyIfAddressExists) {
    throw new AppError("Address already exists", 409);
  }

  const verifyIfCategoriesExists: Category | null =
    await categoriesRepo.findOneBy({
      id: categoryId,
    });

  if (!verifyIfCategoriesExists) {
    throw new AppError("categories not found", 404);
  }

  const createAddress: TAddress = addressRepo.create(payload.address);

  await addressRepo.save(createAddress);

  const realEstate = realEstateRepo.create({
    value: payload.value,
    size: payload.size,
    address: createAddress!,
    category: verifyIfCategoriesExists!,
  });

  await realEstateRepo.save(realEstate);

  return realEstate;
};

export default createRealEstateService;
