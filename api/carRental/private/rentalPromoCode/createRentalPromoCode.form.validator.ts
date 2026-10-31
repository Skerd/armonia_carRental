import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalPromoCodeSchemaDef} from "./rentalPromoCode.schema-def";

export function createRentalPromoCodeFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalPromoCodeSchemaDef, languageCode, form);
}
