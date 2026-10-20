import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalExtraSchemaDef} from "./rentalExtra.schema-def";

export function editRentalExtraFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(RentalExtraSchemaDef, languageCode, form, permissions, readPermissions);
}
