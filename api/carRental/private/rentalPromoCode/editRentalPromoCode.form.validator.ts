import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalPromoCodeSchemaDef} from "./rentalPromoCode.schema-def";

export function editRentalPromoCodeFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(RentalPromoCodeSchemaDef, languageCode, form, permissions, readPermissions);
}
