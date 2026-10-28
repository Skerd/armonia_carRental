import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalPortalTripDef} from "./rentalPortal.forms";

export function rentalPortalTripSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalPortalTripDef, languageCode, form);
}
