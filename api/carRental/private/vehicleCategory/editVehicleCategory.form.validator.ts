import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleCategorySchemaDef} from "./vehicleCategory.schema-def";

export function editVehicleCategoryFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleCategorySchemaDef, languageCode, form, permissions, readPermissions);
}
