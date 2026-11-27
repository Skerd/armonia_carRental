import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleCatalogSchemaDef} from "./vehicleCatalog.schema-def";

export function editVehicleCatalogFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleCatalogSchemaDef, languageCode, form, permissions, readPermissions);
}
