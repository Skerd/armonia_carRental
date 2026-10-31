import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const VEHICLE_FINE_TYPES = ["speeding", "parking", "red_light", "toll", "other"] as const;
export const VEHICLE_FINE_STATUSS = ["received", "driver_identified", "charged", "paid_by_company", "transferred", "disputed"] as const;
export const VEHICLE_FINE_REFERENCE_MAX = 64;
export const VEHICLE_FINE_AUTHORITY_MAX = 128;
export const VEHICLE_FINE_PLACE_MAX = 200;
export const VEHICLE_FINE_NOTES_MAX = 2000;

/** A traffic fine or toll for one car, matched to the booking and driver at the time of the offence. */
export const VehicleFineSchemaDef = {
    reference:   {type: "string", required: true, min: 1, max: VEHICLE_FINE_REFERENCE_MAX},
    vehicle:     {type: "objectId", required: true},
    offenceAt:   {type: "date", required: true},
    type:        {type: "enum", required: true, options: VEHICLE_FINE_TYPES},
    authority:   {type: "string", required: true, min: 1, max: VEHICLE_FINE_AUTHORITY_MAX},
    amount:      {type: "number", required: true, min: 0},
    place:       {type: "string", required: false, max: VEHICLE_FINE_PLACE_MAX},
    dueDate:     {type: "date", required: false},
    status:      {type: "enum", required: false, options: VEHICLE_FINE_STATUSS},
    attachments: {type: "mediaIdArray", required: false},
    notes:       {type: "string", required: false, max: VEHICLE_FINE_NOTES_MAX},
} as const;

export type CreateVehicleFineFormType = InferCreateForm<typeof VehicleFineSchemaDef>;
export type EditVehicleFineFormType = InferEditForm<typeof VehicleFineSchemaDef>;
