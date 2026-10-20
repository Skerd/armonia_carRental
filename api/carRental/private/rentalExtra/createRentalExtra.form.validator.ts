import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalExtraSchemaDef} from "./rentalExtra.schema-def";

export function createRentalExtraFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalExtraSchemaDef, languageCode, form);
}
