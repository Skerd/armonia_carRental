import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalDenyEntrySchemaDef} from "./rentalDenyEntry.schema-def";

export function editRentalDenyEntryFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(RentalDenyEntrySchemaDef, languageCode, form, permissions, readPermissions);
}
