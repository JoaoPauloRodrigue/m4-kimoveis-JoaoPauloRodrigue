import { z } from "zod";
import {
  AllCategoriesSchemaResponse,
  categoriesSchema,
  categoriesSchemaRequest,
  categoriesSchemaResponse,
} from "../../schemas";

type TCategories = z.infer<typeof categoriesSchema>;

type TCategoriesRequest = z.infer<typeof categoriesSchemaRequest>;

type TCategoriesResponse = z.infer<typeof categoriesSchemaResponse>;

type TAllCategoriesResponse = z.infer<typeof AllCategoriesSchemaResponse>;

export {
  TCategories,
  TCategoriesRequest,
  TCategoriesResponse,
  TAllCategoriesResponse,
};
