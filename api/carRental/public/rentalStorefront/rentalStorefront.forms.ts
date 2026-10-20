import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    RentalContactDef,
    RentalExtraSelectionDef,
    RentalTripDef,
} from "../../private/rentalReservation/rentalReservation.forms";
import {
    RENTAL_EXTRAS_MAX_ITEMS,
    RENTAL_IDEMPOTENCY_KEY,
    RENTAL_PAYMENT_CHOICES,
} from "../../private/rentalReservation/rentalReservation.constants";

export const RENTAL_MANAGE_TOKEN_MAX = 2048;

/** Which categories have a car free for this trip, with a price for each. */
export const SearchRentalFormDef = RentalTripDef;
export type SearchRentalFormType = InferCreateForm<typeof SearchRentalFormDef>;

export const QuoteRentalFormDef = {
    ...RentalTripDef,
    category: {type: "objectId", required: true},
    extras:   {type: "embeddedArray", required: false, items: RentalExtraSelectionDef, maxItems: RENTAL_EXTRAS_MAX_ITEMS},
} as const;
export type QuoteRentalFormType = InferCreateForm<typeof QuoteRentalFormDef>;

export const BookRentalFormDef = {
    ...QuoteRentalFormDef,
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
