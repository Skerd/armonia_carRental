import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleFineSchemaDef} from "./vehicleFine.schema-def";

export function editVehicleFineFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleFineSchemaDef, languageCode, form, permissions, readPermissions);
}
