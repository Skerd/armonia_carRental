import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleFineSchemaDef} from "./vehicleFine.schema-def";

export function createVehicleFineFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleFineSchemaDef, languageCode, form);
}
