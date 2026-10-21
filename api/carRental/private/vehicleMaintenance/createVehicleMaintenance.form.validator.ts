import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleMaintenanceSchemaDef} from "./vehicleMaintenance.schema-def";

export function createVehicleMaintenanceFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleMaintenanceSchemaDef, languageCode, form);
}
