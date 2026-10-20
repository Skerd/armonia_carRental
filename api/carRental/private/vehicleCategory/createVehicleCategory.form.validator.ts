import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleCategorySchemaDef} from "./vehicleCategory.schema-def";

export function createVehicleCategoryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleCategorySchemaDef, languageCode, form);
}
