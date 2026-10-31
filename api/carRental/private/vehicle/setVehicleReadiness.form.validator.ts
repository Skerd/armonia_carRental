import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SetVehicleReadinessFormDef} from "./vehicle.schema-def";

export function setVehicleReadinessFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SetVehicleReadinessFormDef, languageCode, form);
}
