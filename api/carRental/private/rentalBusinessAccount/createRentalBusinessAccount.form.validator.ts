import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalBusinessAccountSchemaDef} from "./rentalBusinessAccount.schema-def";

export function createRentalBusinessAccountFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalBusinessAccountSchemaDef, languageCode, form);
}
