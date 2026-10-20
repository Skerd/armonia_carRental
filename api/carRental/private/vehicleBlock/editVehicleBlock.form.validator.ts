import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleBlockSchemaDef} from "./vehicleBlock.schema-def";

export function editVehicleBlockFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleBlockSchemaDef, languageCode, form, permissions, readPermissions);
}
