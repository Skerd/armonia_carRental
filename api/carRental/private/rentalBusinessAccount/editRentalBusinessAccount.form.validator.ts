import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalBusinessAccountSchemaDef} from "./rentalBusinessAccount.schema-def";

export function editRentalBusinessAccountFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(RentalBusinessAccountSchemaDef, languageCode, form, permissions, readPermissions);
}
