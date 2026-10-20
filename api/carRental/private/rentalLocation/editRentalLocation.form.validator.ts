import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalLocationSchemaDef} from "./rentalLocation.schema-def";

export function editRentalLocationFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(RentalLocationSchemaDef, languageCode, form, permissions, readPermissions);
}
