import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalContactDef} from "../../private/rentalReservation/rentalReservation.schema-def";
import {
    BookRentalFormDef,
    ManageDriverFormDef,
    ManageExtendFormDef,
    ManageExtrasFormDef,
    ManageInvoiceFormDef,
    ManageRentalFormDef,
    ManageReviewFormDef,
    QuoteRentalFormDef,
    SearchRentalFormDef,
} from "./rentalStorefront.forms";

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

export function manageDriverFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ManageDriverFormDef, languageCode, form);
}

export function manageExtendFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ManageExtendFormDef, languageCode, form);
}

export function manageExtrasFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ManageExtrasFormDef, languageCode, form);
}

export function manageReviewFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ManageReviewFormDef, languageCode, form);
}

export function manageInvoiceFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ManageInvoiceFormDef, languageCode, form);
}

/** The contact block on its own, so the site can show per-field messages before booking. */
export function rentalContactFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalContactDef, languageCode, form);
}
