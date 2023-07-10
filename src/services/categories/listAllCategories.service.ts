import { Category } from "../../entities";
import { TAllCategoriesResponse } from "../../interfaces";
import { categoriesRepo } from "../../repositories";
import { AllCategoriesSchemaResponse } from "../../schemas";

const listAllCategoriesService = async (): Promise<TAllCategoriesResponse> => {
  let listCategories: Category[] | undefined;

  listCategories = await categoriesRepo.find();

  const categoriesResult: TAllCategoriesResponse =
    AllCategoriesSchemaResponse.parse(listCategories);

  return categoriesResult;
};

export default listAllCategoriesService;
