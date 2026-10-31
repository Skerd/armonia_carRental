import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalReviewSchemaDef} from "./rentalReview.schema-def";

export function createRentalReviewFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalReviewSchemaDef, languageCode, form);
}
