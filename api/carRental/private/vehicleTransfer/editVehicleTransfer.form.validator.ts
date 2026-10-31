import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleTransferSchemaDef} from "./vehicleTransfer.schema-def";

export function editVehicleTransferFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleTransferSchemaDef, languageCode, form, permissions, readPermissions);
}
