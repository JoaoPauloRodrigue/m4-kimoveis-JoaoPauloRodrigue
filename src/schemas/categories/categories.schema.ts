import { z } from "zod";

const categoriesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const categoriesSchemaRequest = categoriesSchema.omit({
  id: true,
});

const categoriesSchemaResponse = categoriesSchema;

const AllCategoriesSchemaResponse = z.array(categoriesSchemaResponse);

export {
  categoriesSchema,
  categoriesSchemaRequest,
  categoriesSchemaResponse,
  AllCategoriesSchemaResponse,
};
