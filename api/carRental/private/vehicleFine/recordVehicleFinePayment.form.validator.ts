import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RecordVehicleFinePaymentFormDef} from "./vehicleFine.schema-def";

export function recordVehicleFinePaymentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RecordVehicleFinePaymentFormDef, languageCode, form);
}
