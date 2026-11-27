import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    RentalContactDef,
    RentalExtraSelectionDef,
    RentalTripDef,
} from "../../private/rentalReservation/rentalReservation.schema-def";
import {
    RENTAL_EXTRAS_MAX_ITEMS,
    RENTAL_IDEMPOTENCY_KEY,
    RENTAL_DOCUMENT_NUMBER_MAX,
    RENTAL_ID_DOCUMENT_TYPES,
    RENTAL_LICENSE_COUNTRY_MAX,
    RENTAL_PAYMENT_CHOICES,
    RENTAL_PROMO_CODE_INPUT_MAX,
} from "../../private/rentalReservation/rentalReservation.constants";
import {RENTAL_REVIEW_COMMENT_MAX} from "../../private/rentalReview/rentalReview.schema-def";

export const RENTAL_MANAGE_TOKEN_MAX = 2048;

/** Which categories have a car free for this trip, with a price for each. */
export const SearchRentalFormDef = RentalTripDef;
export type SearchRentalFormType = InferCreateForm<typeof SearchRentalFormDef>;

export const QuoteRentalFormDef = {
    ...RentalTripDef,
    category:        {type: "objectId", required: true},
    /** This exact car of the group, rented on its own at its own prices (D198); without it, the class. */
    vehicle:         {type: "objectId", required: false},
    extras:          {type: "embeddedArray", required: false, items: RentalExtraSelectionDef, maxItems: RENTAL_EXTRAS_MAX_ITEMS},
    /** The main driver's birth date, for the minimum age and the young-driver fee. */
    driverBirthDate: {type: "string", required: false, format: "localDate"},
    promoCode:       {type: "string", required: false, max: RENTAL_PROMO_CODE_INPUT_MAX},
    crossBorder:     {type: "boolean", required: false},
} as const;
export type QuoteRentalFormType = InferCreateForm<typeof QuoteRentalFormDef>;

export const BookRentalFormDef = {
    ...QuoteRentalFormDef,
    driverBirthDate: {type: "string", required: true, format: "localDate"},
    contact:        {type: "embedded", required: true, items: RentalContactDef},
    paymentChoice:  {type: "enum", required: true, options: RENTAL_PAYMENT_CHOICES},
    acceptTerms:    {type: "boolean", required: true},
    /** The total the customer was shown; a different server total answers `rental_price_changed`. */
    expectedTotal:  {type: "number", required: true, min: 0},
    idempotencyKey: {type: "string", required: true, ...RENTAL_IDEMPOTENCY_KEY},
} as const;
export type BookRentalFormType = InferCreateForm<typeof BookRentalFormDef>;

/** The guest link from the confirmation email. */
export const ManageRentalFormDef = {
    token: {type: "string", required: true, min: 1, max: RENTAL_MANAGE_TOKEN_MAX},
} as const;
export type ManageRentalFormType = InferCreateForm<typeof ManageRentalFormDef>;

/** Licence details the customer types on the manage page, for the main driver. */
export const ManageDriverFormDef = {
    ...ManageRentalFormDef,
    licenseNumber:    {type: "string", required: true, min: 1, max: RENTAL_DOCUMENT_NUMBER_MAX},
    licenseCountry:   {type: "string", required: false, max: RENTAL_LICENSE_COUNTRY_MAX},
    licenseIssuedAt:  {type: "string", required: false, format: "localDate"},
    licenseExpiresAt: {type: "string", required: false, format: "localDate"},
    idDocumentType:   {type: "enum", required: false, options: RENTAL_ID_DOCUMENT_TYPES},
    idDocumentNumber: {type: "string", required: false, max: RENTAL_DOCUMENT_NUMBER_MAX},
} as const;
export type ManageDriverFormType = InferCreateForm<typeof ManageDriverFormDef>;

export const ManageExtendFormDef = {
    ...ManageRentalFormDef,
    returnDate: {type: "string", required: true, format: "localDate"},
    returnTime: {type: "string", required: true, format: "timeOfDay"},
    /** When true, start an online payment for whatever is still owed after the extension. */
    pay: {type: "boolean", required: false},
} as const;
export type ManageExtendFormType = InferCreateForm<typeof ManageExtendFormDef>;

export const ManageExtrasFormDef = {
    ...ManageRentalFormDef,
    extras: {type: "embeddedArray", required: true, items: RentalExtraSelectionDef, maxItems: RENTAL_EXTRAS_MAX_ITEMS},
} as const;
export type ManageExtrasFormType = InferCreateForm<typeof ManageExtrasFormDef>;

export const ManageReviewFormDef = {
    ...ManageRentalFormDef,
    rating:  {type: "number", required: true, min: 1, max: 5},
    comment: {type: "string", required: false, max: RENTAL_REVIEW_COMMENT_MAX},
} as const;
export type ManageReviewFormType = InferCreateForm<typeof ManageReviewFormDef>;

export const ManageInvoiceFormDef = {
    ...ManageRentalFormDef,
    invoiceId: {type: "objectId", required: true},
} as const;
export type ManageInvoiceFormType = InferCreateForm<typeof ManageInvoiceFormDef>;
