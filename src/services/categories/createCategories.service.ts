import { Category } from "../../entities";
import { TCategoriesRequest, TCategoriesResponse } from "../../interfaces";
import { categoriesRepo } from "../../repositories";
import { categoriesSchemaResponse } from "../../schemas";

const createCategoriesService = async (
  payload: TCategoriesRequest
): Promise<TCategoriesResponse> => {
  const createCategories: Category = categoriesRepo.create(payload);

  await categoriesRepo.save(createCategories);

  const categoriesResult: TCategoriesResponse =
    categoriesSchemaResponse.parse(createCategories);

  return categoriesResult;
};

export default createCategoriesService;
