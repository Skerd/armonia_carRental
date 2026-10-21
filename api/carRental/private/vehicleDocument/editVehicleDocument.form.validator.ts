import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleDocumentSchemaDef} from "./vehicleDocument.schema-def";

export function editVehicleDocumentFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleDocumentSchemaDef, languageCode, form, permissions, readPermissions);
}
