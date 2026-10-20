import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleSchemaDef} from "./vehicle.schema-def";

export function createVehicleFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleSchemaDef, languageCode, form);
}
