import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalContactDef} from "../../private/rentalReservation/rentalReservation.schema-def";
import {BookRentalFormDef, ManageRentalFormDef, QuoteRentalFormDef, SearchRentalFormDef} from "./rentalStorefront.forms";

export function searchRentalFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SearchRentalFormDef, languageCode, form);
}

export function quoteRentalFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(QuoteRentalFormDef, languageCode, form);
}

export function bookRentalFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(BookRentalFormDef, languageCode, form);
}

export function manageRentalFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ManageRentalFormDef, languageCode, form);
}

/** The contact block on its own, so the site can show per-field messages before booking. */
export function rentalContactFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalContactDef, languageCode, form);
}
