import { z } from "zod";
import {
  addressSchema,
  listAllRealtEstatesSchema,
  realEstateSchema,
  realEstateSchemaRequest,
  realEstateSchemaResponse,
} from "../../schemas";

type TAddress = z.infer<typeof addressSchema>;

type TRealEstate = z.infer<typeof realEstateSchema>;

type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;

type TRealEstateResponse = z.infer<typeof realEstateSchemaResponse>;

type TListAllRealEstatesResponse = z.infer<typeof listAllRealtEstatesSchema>;

export {
  TAddress,
  TRealEstate,
  TRealEstateRequest,
  TRealEstateResponse,
  TListAllRealEstatesResponse,
};
