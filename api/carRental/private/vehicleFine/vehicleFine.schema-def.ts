import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const VEHICLE_FINE_TYPES = ["speeding", "parking", "red_light", "toll", "other"] as const;
/**
 * Moved by actions only. `transferred`: the driver was named to the authority and pays it.
 * `charged`: the company recharged it to the booking. `paid_by_company`: the company paid
 * and kept the cost. `cancelled`: annulled by the authority.
 */
export const VEHICLE_FINE_STATUSS = ["received", "driver_identified", "charged", "paid_by_company", "transferred", "disputed", "cancelled"] as const;
export const VEHICLE_FINE_REFERENCE_MAX = 64;
export const VEHICLE_FINE_AUTHORITY_MAX = 128;
export const VEHICLE_FINE_PLACE_MAX = 200;
export const VEHICLE_FINE_NOTES_MAX = 2000;
export const VEHICLE_FINE_PAYMENT_REFERENCE_MAX = 64;

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
    attachments: {type: "mediaIdArray", required: false},
    notes:       {type: "string", required: false, max: VEHICLE_FINE_NOTES_MAX},
} as const;

export type CreateVehicleFineFormType = InferCreateForm<typeof VehicleFineSchemaDef>;
export type EditVehicleFineFormType = InferEditForm<typeof VehicleFineSchemaDef>;

/** The company paid the authority. The amount can differ from the fine (early-payment discount, late surcharge). */
export const RecordVehicleFinePaymentFormDef = {
    _id:              {type: "objectId", required: true},
    paidAt:           {type: "date", required: true},
    paidAmount:       {type: "number", required: true, min: 0},
    paymentReference: {type: "string", required: false, max: VEHICLE_FINE_PAYMENT_REFERENCE_MAX},
} as const;
export type RecordVehicleFinePaymentFormType = InferCreateForm<typeof RecordVehicleFinePaymentFormDef>;
