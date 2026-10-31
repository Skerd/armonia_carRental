import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalReviewSchemaDef} from "./rentalReview.schema-def";

export function editRentalReviewFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(RentalReviewSchemaDef, languageCode, form, permissions, readPermissions);
}
