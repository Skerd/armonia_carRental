import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleSchemaDef} from "./vehicle.schema-def";

export function editVehicleFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleSchemaDef, languageCode, form, permissions, readPermissions);
}
