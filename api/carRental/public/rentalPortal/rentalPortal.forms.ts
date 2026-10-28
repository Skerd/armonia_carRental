import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalTripDef} from "../../private/rentalReservation/rentalReservation.schema-def";

/** The trip filter of the portal's car catalog (`f.pickupDate` …): cars free for it, priced for it. */
export const RentalPortalTripDef = {
    pickupDate: RentalTripDef.pickupDate,
    pickupTime: RentalTripDef.pickupTime,
    returnDate: RentalTripDef.returnDate,
    returnTime: RentalTripDef.returnTime,
} as const;
export type RentalPortalTripType = InferCreateForm<typeof RentalPortalTripDef>;
