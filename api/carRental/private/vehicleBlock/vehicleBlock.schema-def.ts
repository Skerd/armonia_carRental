import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const VEHICLE_BLOCK_REASONS = ["maintenance", "repair", "transfer", "other"] as const;
export const VEHICLE_BLOCK_NOTE_MAX = 500;

/** Time a vehicle cannot be rented. The window is fixed at create; only reason and note change. */
export const VehicleBlockSchemaDef = {
    vehicle: {type: "objectId", required: true},
    startAt: {type: "date", required: true},
    endAt:   {type: "date", required: true, afterField: "startAt"},
    reason:  {type: "enum", required: true, options: VEHICLE_BLOCK_REASONS},
    note:    {type: "string", required: false, max: VEHICLE_BLOCK_NOTE_MAX},
} as const;

export type CreateVehicleBlockFormType = InferCreateForm<typeof VehicleBlockSchemaDef>;
export type EditVehicleBlockFormType = InferEditForm<typeof VehicleBlockSchemaDef>;
