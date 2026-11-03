import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {VEHICLE_RECORD_NOTES_MAX} from "../vehicle/vehicle.schema-def";
import {VEHICLE_MAINTENANCE_PROVIDER_MAX} from "../vehicleMaintenance/vehicleMaintenance.schema-def";

export const VEHICLE_DAMAGE_AREAS = ["front", "rear", "left", "right", "roof", "interior", "windshield", "wheels", "underbody", "other"] as const;
export const VEHICLE_DAMAGE_SEVERITIES = ["minor", "moderate", "major"] as const;
/** Moved by actions only: a scheduled repair makes it `in_repair`, the repair's completion `repaired`. */
export const VEHICLE_DAMAGE_STATUSES = ["open", "in_repair", "repaired"] as const;
export const VEHICLE_DAMAGE_PHOTOS_MAX = 20;
export const VEHICLE_DAMAGE_CLAIM_NUMBER_MAX = 64;

/**
 * A damage found on one vehicle, optionally tied to the booking it happened in.
 * Its repair cost is the cost of the repair record it is fixed by.
 */
export const VehicleDamageSchemaDef = {
    vehicle:       {type: "objectId", required: true},
    reservation:   {type: "objectId", required: false},
    reportedAt:    {type: "date", required: true},
    area:          {type: "enum", required: true, options: VEHICLE_DAMAGE_AREAS},
    severity:      {type: "enum", required: true, options: VEHICLE_DAMAGE_SEVERITIES},
    description:   {type: "string", required: true, min: 1, max: VEHICLE_RECORD_NOTES_MAX},
    photos:        {type: "mediaIdArray", required: false},
    estimatedCost:     {type: "number", required: false, min: 0},
    insurance:         {type: "objectId", required: false},
    claimNumber:       {type: "string", required: false, max: VEHICLE_DAMAGE_CLAIM_NUMBER_MAX},
    insurerPaidAmount: {type: "number", required: false, min: 0},
} as const;

export type CreateVehicleDamageFormType = InferCreateForm<typeof VehicleDamageSchemaDef>;
export type EditVehicleDamageFormType = InferEditForm<typeof VehicleDamageSchemaDef>;

/** Charges the customer of the linked booking for this damage, up to their excess. */
export const ChargeVehicleDamageFormDef = {
    _id:    {type: "objectId", required: true},
    amount: {type: "number", required: true, min: 0.01},
} as const;
export type ChargeVehicleDamageFormType = InferCreateForm<typeof ChargeVehicleDamageFormDef>;

/**
 * Sends the car to repair for this damage: a new scheduled repair record, or an
 * existing scheduled one of the same car (several damages, one garage visit).
 * `readyAt` keeps the car out of bookings until then.
 */
export const ScheduleVehicleDamageRepairFormDef = {
    _id:         {type: "objectId", required: true},
    repair:      {type: "objectId", required: false},
    serviceDate: {type: "date", required: false},
    readyAt:     {type: "date", required: false, afterField: "serviceDate"},
    provider:    {type: "string", required: false, max: VEHICLE_MAINTENANCE_PROVIDER_MAX},
    cost:        {type: "number", required: false, min: 0},
} as const;
export type ScheduleVehicleDamageRepairFormType = InferCreateForm<typeof ScheduleVehicleDamageRepairFormDef>;
