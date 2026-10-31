import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const VEHICLE_TRANSFER_STATUSS = ["planned", "in_transit", "done", "cancelled"] as const;
export const VEHICLE_TRANSFER_NOTES_MAX = 2000;

/** A car moved from one location to another; it is blocked for bookings on the way. */
export const VehicleTransferSchemaDef = {
    vehicle:      {type: "objectId", required: true},
    fromLocation: {type: "objectId", required: true},
    toLocation:   {type: "objectId", required: true},
    departAt:     {type: "date", required: true},
    arriveAt:     {type: "date", required: true, afterField: "departAt"},
    driver:       {type: "objectId", required: false},
    odometerKm:   {type: "number", required: false, min: 0},
    notes:        {type: "string", required: false, max: VEHICLE_TRANSFER_NOTES_MAX},
} as const;

export type CreateVehicleTransferFormType = InferCreateForm<typeof VehicleTransferSchemaDef>;
export type EditVehicleTransferFormType = InferEditForm<typeof VehicleTransferSchemaDef>;
