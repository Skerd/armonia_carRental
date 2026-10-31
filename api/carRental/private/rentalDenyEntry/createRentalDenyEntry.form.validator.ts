import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalDenyEntrySchemaDef} from "./rentalDenyEntry.schema-def";

export function createRentalDenyEntryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalDenyEntrySchemaDef, languageCode, form);
}
