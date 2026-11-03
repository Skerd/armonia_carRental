import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ScheduleVehicleDamageRepairFormDef} from "./vehicleDamage.schema-def";

export function scheduleVehicleDamageRepairFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ScheduleVehicleDamageRepairFormDef, languageCode, form);
}
