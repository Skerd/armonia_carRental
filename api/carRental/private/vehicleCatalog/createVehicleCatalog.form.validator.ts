import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleCatalogSchemaDef} from "./vehicleCatalog.schema-def";

export function createVehicleCatalogFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleCatalogSchemaDef, languageCode, form);
}
