import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleBlockSchemaDef} from "./vehicleBlock.schema-def";

export function createVehicleBlockFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleBlockSchemaDef, languageCode, form);
}
