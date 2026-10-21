import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleDamageSchemaDef} from "./vehicleDamage.schema-def";

export function createVehicleDamageFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleDamageSchemaDef, languageCode, form);
}
