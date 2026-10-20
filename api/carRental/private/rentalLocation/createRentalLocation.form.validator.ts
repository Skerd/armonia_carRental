import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalLocationSchemaDef} from "./rentalLocation.schema-def";

export function createRentalLocationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalLocationSchemaDef, languageCode, form);
}
