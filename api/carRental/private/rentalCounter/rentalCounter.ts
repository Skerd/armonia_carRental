import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import type {RentalReservation} from "../rentalReservation/rentalReservation.dto";

/** The counter's day: one local date, optionally one location. */
export const RentalCounterFormDef = {
    date:     {type: "string", required: true, format: "localDate"},
    location: {type: "objectId", required: false},
} as const;
export type RentalCounterFormType = InferCreateForm<typeof RentalCounterFormDef>;

export function rentalCounterFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalCounterFormDef, languageCode, form);
}

export type RentalCounterResponse = {
    data: {
        timezone: string;
        /** Confirmed bookings picking up that day. */
        pickups: RentalReservation[];
        /** Cars on the road due back that day. */
        returns: RentalReservation[];
        /** Cars on the road that should have been back before that day. */
        overdue: RentalReservation[];
    };
};
