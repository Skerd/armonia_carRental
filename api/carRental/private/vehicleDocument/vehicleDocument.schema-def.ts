import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {VEHICLE_RECORD_NOTES_MAX} from "../vehicle/vehicle.schema-def";

export const VEHICLE_DOCUMENT_TYPES = ["registration", "technical_inspection", "emissions_test", "road_tax", "green_card", "other"] as const;
/** `expired` is also set by the daily fleet reminder job once `expiresAt` has passed. */
export const VEHICLE_DOCUMENT_STATUSES = ["active", "expired"] as const;
export const VEHICLE_DOCUMENT_NUMBER_MAX = 64;
export const VEHICLE_DOCUMENT_ISSUER_MAX = 128;

/** A registration, inspection certificate or similar paper of one vehicle. */
export const VehicleDocumentSchemaDef = {
    vehicle:        {type: "objectId", required: true},
    type:           {type: "enum", required: true, options: VEHICLE_DOCUMENT_TYPES},
    documentNumber: {type: "string", required: false, max: VEHICLE_DOCUMENT_NUMBER_MAX},
    issuer:         {type: "string", required: false, max: VEHICLE_DOCUMENT_ISSUER_MAX},
    issuedAt:       {type: "date", required: false},
    expiresAt:      {type: "date", required: false, afterField: "issuedAt"},
    status:         {type: "enum", required: false, options: VEHICLE_DOCUMENT_STATUSES},
    attachments:    {type: "mediaIdArray", required: false},
    notes:          {type: "string", required: false, max: VEHICLE_RECORD_NOTES_MAX},
} as const;

export type CreateVehicleDocumentFormType = InferCreateForm<typeof VehicleDocumentSchemaDef>;
export type EditVehicleDocumentFormType = InferEditForm<typeof VehicleDocumentSchemaDef>;
