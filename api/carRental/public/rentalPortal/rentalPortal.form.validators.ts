import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalPortalSearchFormDef} from "./rentalPortal.forms";

export function rentalPortalSearchFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalPortalSearchFormDef, languageCode, form);
}
