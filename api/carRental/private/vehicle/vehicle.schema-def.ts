import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** `retired` replaces deletion once a vehicle has history; only `active` vehicles are rented out. */
export const VEHICLE_STATUSES = ["active", "maintenance", "retired"] as const;
export type VehicleStatus = (typeof VEHICLE_STATUSES)[number];

export const VEHICLE_MAKE_MAX = 64;
export const VEHICLE_MODEL_MAX = 64;
export const VEHICLE_PLATE_MAX = 16;
export const VEHICLE_VIN_MAX = 32;
export const VEHICLE_COLOR_MAX = 32;
export const VEHICLE_NOTES_MAX = 2000;
export const VEHICLE_YEAR = {min: 1950, max: 2100} as const;
export const VEHICLE_IMAGES_MAX = 12;
export const VEHICLE_VIDEOS_MAX = 3;
/** Scans and invoices on insurance, document and service records. */
export const VEHICLE_RECORD_ATTACHMENTS_MAX = 10;
export const VEHICLE_RECORD_NOTES_MAX = 2000;

export const VehicleSchemaDef = {
    category:      {type: "objectId", required: true},
    make:          {type: "string", required: true, min: 1, max: VEHICLE_MAKE_MAX},
    model:         {type: "string", required: true, min: 1, max: VEHICLE_MODEL_MAX},
    year:          {type: "number", required: false, ...VEHICLE_YEAR},
    plate:         {type: "string", required: true, min: 1, max: VEHICLE_PLATE_MAX},
    vin:           {type: "string", required: false, max: VEHICLE_VIN_MAX},
    color:         {type: "string", required: false, max: VEHICLE_COLOR_MAX},
    homeLocation:  {type: "objectId", required: true},
    status:        {type: "enum", required: true, options: VEHICLE_STATUSES},
    odometerKm:    {type: "number", required: false, min: 0},
    notes:         {type: "string", required: false, max: VEHICLE_NOTES_MAX},
    // Not public: vehicle photos show the plate. Customers see the category's media.
    images:        {type: "mediaIdArray", required: false},
    videos:        {type: "mediaIdArray", required: false},
    acquiredAt:    {type: "date", required: false},
    purchasePrice: {type: "number", required: false, min: 0},
} as const;

export type CreateVehicleFormType = InferCreateForm<typeof VehicleSchemaDef>;
export type EditVehicleFormType = InferEditForm<typeof VehicleSchemaDef>;
