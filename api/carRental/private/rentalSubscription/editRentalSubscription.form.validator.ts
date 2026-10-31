import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalSubscriptionSchemaDef} from "./rentalSubscription.schema-def";

export function editRentalSubscriptionFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(RentalSubscriptionSchemaDef, languageCode, form, permissions, readPermissions);
}
