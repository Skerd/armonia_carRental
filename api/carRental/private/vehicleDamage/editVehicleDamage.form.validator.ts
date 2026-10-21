import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleDamageSchemaDef} from "./vehicleDamage.schema-def";

export function editVehicleDamageFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleDamageSchemaDef, languageCode, form, permissions, readPermissions);
}
