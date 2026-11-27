import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import type {RentalReservationStatus} from "../rentalReservation/rentalReservation.constants";
import type {VEHICLE_BLOCK_REASONS} from "../vehicleBlock/vehicleBlock.schema-def";
import type {VehicleReadiness} from "../vehicle/vehicle.schema-def";

export const RENTAL_PLANNER_MAX_DAYS = 62;

/** The planner window: from a day, for a number of days, optionally one location or category. */
export const RentalPlannerFormDef = {
    from:     {type: "string", required: true, format: "localDate"},
    days:     {type: "number", required: true, min: 1, max: RENTAL_PLANNER_MAX_DAYS},
    location: {type: "objectId", required: false},
    category: {type: "objectId", required: false},
} as const;
export type RentalPlannerFormType = InferCreateForm<typeof RentalPlannerFormDef>;

export function rentalPlannerFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalPlannerFormDef, languageCode, form);
}

/** One row per car, with what keeps it busy in the window. Times are ISO instants. */
export type RentalPlannerResponse = {
    data: {
        from: string;
        to: string;
        timezone: string;
        vehicles: {_id: string; plate: string; label: string; categoryId: string; categoryName: string; readiness: VehicleReadiness; locationName?: string}[];
        reservations: {_id: string; number: string; vehicle: string; status: RentalReservationStatus; pickupAt: string; returnAt: string; customer: string; needsTransfer: boolean; exactVehicle: boolean}[];
        blocks: {_id: string; vehicle: string; startAt: string; endAt: string; reason: (typeof VEHICLE_BLOCK_REASONS)[number]}[];
    };
};
