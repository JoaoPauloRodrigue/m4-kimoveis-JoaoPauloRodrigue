import { Category } from "../../entities";
import { AppError } from "../../error";
import { categoriesRepo } from "../../repositories";

const listAllRealEstateByCategoriesService = async (
  categoryId: number
): Promise<Category> => {
  const listCategories: Category | null = await categoriesRepo.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });

  if (!listCategories) {
    throw new AppError("Category not found", 404);
  }
  return listCategories;
};

export default listAllRealEstateByCategoriesService;
