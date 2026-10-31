import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleTransferSchemaDef} from "./vehicleTransfer.schema-def";

export function createVehicleTransferFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleTransferSchemaDef, languageCode, form);
}
