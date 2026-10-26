import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalTripDef} from "../../private/rentalReservation/rentalReservation.schema-def";

/** Rental companies per page of a portal availability search; each runs a full search. */
export const RENTAL_PORTAL_SEARCH_PAGE_MAX = 10;

/** Cars free for a trip at any listed company, picked up and returned in `city`. */
export const RentalPortalSearchFormDef = {
    city:       {type: "string", required: false, max: 100},
    pickupDate: RentalTripDef.pickupDate,
    pickupTime: RentalTripDef.pickupTime,
    returnDate: RentalTripDef.returnDate,
    returnTime: RentalTripDef.returnTime,
    offset:     {type: "number", required: false, min: 0},
    limit:      {type: "number", required: false, min: 1, max: RENTAL_PORTAL_SEARCH_PAGE_MAX},
} as const;
export type RentalPortalSearchFormType = InferCreateForm<typeof RentalPortalSearchFormDef>;
