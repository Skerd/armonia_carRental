import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {VEHICLE_RECORD_NOTES_MAX} from "../vehicle/vehicle.schema-def";

export const VEHICLE_DAMAGE_AREAS = ["front", "rear", "left", "right", "roof", "interior", "windshield", "wheels", "underbody", "other"] as const;
export const VEHICLE_DAMAGE_SEVERITIES = ["minor", "moderate", "major"] as const;
export const VEHICLE_DAMAGE_STATUSES = ["open", "in_repair", "repaired"] as const;
export const VEHICLE_DAMAGE_PHOTOS_MAX = 20;

/** A damage found on one vehicle, optionally tied to the booking it happened in. */
export const VehicleDamageSchemaDef = {
    vehicle:       {type: "objectId", required: true},
    reservation:   {type: "objectId", required: false},
    reportedAt:    {type: "date", required: true},
    area:          {type: "enum", required: true, options: VEHICLE_DAMAGE_AREAS},
    severity:      {type: "enum", required: true, options: VEHICLE_DAMAGE_SEVERITIES},
    description:   {type: "string", required: true, min: 1, max: VEHICLE_RECORD_NOTES_MAX},
    photos:        {type: "mediaIdArray", required: false},
    status:        {type: "enum", required: false, options: VEHICLE_DAMAGE_STATUSES},
    estimatedCost: {type: "number", required: false, min: 0},
    repairCost:    {type: "number", required: false, min: 0},
    repairedAt:    {type: "date", required: false, afterField: "reportedAt"},
} as const;

export type CreateVehicleDamageFormType = InferCreateForm<typeof VehicleDamageSchemaDef>;
export type EditVehicleDamageFormType = InferEditForm<typeof VehicleDamageSchemaDef>;
