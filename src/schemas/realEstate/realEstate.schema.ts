import { z } from "zod";
import { categoriesSchema } from "../categories/categories.schema";

const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional().nullable(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const addressSchemaRequest = addressSchema.omit({
  id: true,
});

const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z.string().or(z.number()).default(0),
  size: z.number().int().positive(),
  sold: z.boolean().default(false),
  address: addressSchemaRequest,
  categoryId: z.number().int().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateSchemaRequest = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

const realEstateSchemaResponse = z.object({
  id: z.number().positive(),
  value: z.string().or(z.number()).default(0),
  size: z.number().int().positive(),
  sold: z.boolean().default(false),
  address: addressSchemaRequest.optional(),
  categoryId: categoriesSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

const listAllRealtEstatesSchema = z.array(realEstateSchemaResponse);

export {
  addressSchema,
  realEstateSchema,
  realEstateSchemaRequest,
  realEstateSchemaResponse,
  listAllRealtEstatesSchema,
};
