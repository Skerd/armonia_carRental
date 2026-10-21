import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleDocumentSchemaDef} from "./vehicleDocument.schema-def";

export function createVehicleDocumentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleDocumentSchemaDef, languageCode, form);
}
