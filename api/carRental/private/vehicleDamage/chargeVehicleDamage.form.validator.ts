import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ChargeVehicleDamageFormDef} from "./vehicleDamage.schema-def";

export function chargeVehicleDamageFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ChargeVehicleDamageFormDef, languageCode, form);
}
