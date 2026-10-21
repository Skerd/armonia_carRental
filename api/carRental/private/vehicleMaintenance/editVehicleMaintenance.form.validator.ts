import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleMaintenanceSchemaDef} from "./vehicleMaintenance.schema-def";

export function editVehicleMaintenanceFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleMaintenanceSchemaDef, languageCode, form, permissions, readPermissions);
}
