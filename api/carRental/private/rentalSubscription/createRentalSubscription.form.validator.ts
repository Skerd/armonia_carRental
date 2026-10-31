import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalSubscriptionSchemaDef} from "./rentalSubscription.schema-def";

export function createRentalSubscriptionFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalSubscriptionSchemaDef, languageCode, form);
}
