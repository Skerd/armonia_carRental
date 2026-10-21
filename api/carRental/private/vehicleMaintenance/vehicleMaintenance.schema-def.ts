import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {VEHICLE_RECORD_NOTES_MAX} from "../vehicle/vehicle.schema-def";

export const VEHICLE_MAINTENANCE_TYPES = ["scheduled_service", "oil_change", "tires", "brakes", "inspection", "repair", "battery", "other"] as const;
/** Only `completed` records set the vehicle's next service due date and km. */
export const VEHICLE_MAINTENANCE_STATUSES = ["scheduled", "completed", "cancelled"] as const;
export const VEHICLE_MAINTENANCE_PROVIDER_MAX = 128;

/** One service, repair or check of one vehicle. */
export const VehicleMaintenanceSchemaDef = {
    vehicle:     {type: "objectId", required: true},
    type:        {type: "enum", required: true, options: VEHICLE_MAINTENANCE_TYPES},
    status:      {type: "enum", required: false, options: VEHICLE_MAINTENANCE_STATUSES},
    serviceDate: {type: "date", required: true},
    odometerKm:  {type: "number", required: false, min: 0},
    provider:    {type: "string", required: false, max: VEHICLE_MAINTENANCE_PROVIDER_MAX},
    cost:        {type: "number", required: false, min: 0},
    description: {type: "string", required: false, max: VEHICLE_RECORD_NOTES_MAX},
    nextDueAt:   {type: "date", required: false, afterField: "serviceDate"},
    nextDueKm:   {type: "number", required: false, min: 0},
    attachments: {type: "mediaIdArray", required: false},
} as const;

export type CreateVehicleMaintenanceFormType = InferCreateForm<typeof VehicleMaintenanceSchemaDef>;
export type EditVehicleMaintenanceFormType = InferEditForm<typeof VehicleMaintenanceSchemaDef>;
