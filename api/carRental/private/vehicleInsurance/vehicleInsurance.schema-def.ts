import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {VEHICLE_RECORD_NOTES_MAX} from "../vehicle/vehicle.schema-def";

export const VEHICLE_INSURANCE_COVERAGES = ["third_party", "partial_casco", "full_casco"] as const;
/** `expired` is also set by the daily fleet reminder job once `expiresAt` has passed. */
export const VEHICLE_INSURANCE_STATUSES = ["active", "expired", "cancelled"] as const;
export const VEHICLE_INSURER_MAX = 128;
export const VEHICLE_POLICY_NUMBER_MAX = 64;

/** One insurance policy of one vehicle. A renewal is a new policy, so the history stays. */
export const VehicleInsuranceSchemaDef = {
    vehicle:      {type: "objectId", required: true},
    insurer:      {type: "string", required: true, min: 1, max: VEHICLE_INSURER_MAX},
    policyNumber: {type: "string", required: true, min: 1, max: VEHICLE_POLICY_NUMBER_MAX},
    coverage:     {type: "enum", required: true, options: VEHICLE_INSURANCE_COVERAGES},
    validFrom:    {type: "date", required: true},
    expiresAt:    {type: "date", required: true, afterField: "validFrom"},
    premium:      {type: "number", required: false, min: 0},
    deductible:   {type: "number", required: false, min: 0},
    status:       {type: "enum", required: false, options: VEHICLE_INSURANCE_STATUSES},
    attachments:  {type: "mediaIdArray", required: false},
    notes:        {type: "string", required: false, max: VEHICLE_RECORD_NOTES_MAX},
} as const;

export type CreateVehicleInsuranceFormType = InferCreateForm<typeof VehicleInsuranceSchemaDef>;
export type EditVehicleInsuranceFormType = InferEditForm<typeof VehicleInsuranceSchemaDef>;
