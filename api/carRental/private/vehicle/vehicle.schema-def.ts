import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    VEHICLE_CATEGORY_SEASONS_MAX_ITEMS,
    VEHICLE_DOORS,
    VEHICLE_FUEL_TYPES,
    VEHICLE_LUGGAGE,
    VEHICLE_SEATS,
    VEHICLE_TRANSMISSIONS,
    VehicleCategorySeasonDef,
} from "../vehicleCategory/vehicleCategory.schema-def";

/** Whether a car can go out again: set to `needs_cleaning` at every return, back to `ready` by staff. */
export const VEHICLE_READINESS = ["ready", "needs_cleaning", "needs_check"] as const;
export type VehicleReadiness = (typeof VEHICLE_READINESS)[number];

/** Changes a car's readiness from the fleet planner or the car's menu. */
export const SetVehicleReadinessFormDef = {
    _id:       {type: "objectId", required: true},
    readiness: {type: "enum", required: true, options: VEHICLE_READINESS},
} as const;

/** `retired` replaces deletion once a vehicle has history; only `active` vehicles are rented out. */
export const VEHICLE_STATUSES = ["active", "maintenance", "retired"] as const;
export type VehicleStatus = (typeof VEHICLE_STATUSES)[number];

/** A car's colour, from one list shown in every language (D199): consistent, and filterable on the site. */
export const VEHICLE_COLORS = [
    "white", "black", "silver", "grey", "blue", "red", "green", "beige", "brown", "yellow", "orange", "gold", "purple", "other",
] as const;
export type VehicleColor = (typeof VEHICLE_COLORS)[number];

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
/** The car's own page when it is rented on its own (D198). */
export const VEHICLE_LISTING_TITLE_MAX = 128;
export const VEHICLE_LISTING_DESCRIPTION_MAX = 2000;
export const VEHICLE_LISTING_IMAGES_MAX = 12;

export const VehicleSchemaDef = {
    category:      {type: "objectId", required: true},
    /**
     * Its make and model in the platform's vehicle catalog (D199): a new car needs both, and the model must be one of
     * the make's; the model fills the car's empty specs.
     */
    catalogMake:   {type: "objectId", required: false},
    catalogModel:  {type: "objectId", required: false},
    // The catalog's names, written by the server from `catalogMake`/`catalogModel` (titles, search and records read them).
    make:          {type: "string", required: false, min: 1, max: VEHICLE_MAKE_MAX},
    model:         {type: "string", required: false, min: 1, max: VEHICLE_MODEL_MAX},
    year:          {type: "number", required: false, ...VEHICLE_YEAR},
    plate:         {type: "string", required: true, min: 1, max: VEHICLE_PLATE_MAX},
    vin:           {type: "string", required: false, max: VEHICLE_VIN_MAX},
    color:         {type: "enum", required: false, options: VEHICLE_COLORS},
    homeLocation:  {type: "objectId", required: true},
    status:        {type: "enum", required: true, options: VEHICLE_STATUSES},
    odometerKm:    {type: "number", required: false, min: 0},
    notes:         {type: "string", required: false, max: VEHICLE_NOTES_MAX},
    // Not public: vehicle photos show the plate. Customers see the category's media.
    images:        {type: "mediaIdArray", required: false},
    videos:        {type: "mediaIdArray", required: false},
    acquiredAt:    {type: "date", required: false},
    purchasePrice: {type: "number", required: false, min: 0},
    trackerId:     {type: "string", required: false, max: 64},
    lastLatitude:  {type: "number", required: false, min: -90, max: 90},
    lastLongitude: {type: "number", required: false, min: -180, max: 180},
    lastReportedAt:{type: "date", required: false},
    // Rented on its own (D198): customers can book this exact car, at its own prices when it has them.
    listedAlone:        {type: "boolean", required: false},
    listingTitle:       {type: "string", required: false, max: VEHICLE_LISTING_TITLE_MAX},
    listingDescription: {type: "string", required: false, max: VEHICLE_LISTING_DESCRIPTION_MAX},
    // Public, unlike `images`: staff pick photos that do not show the plate. Empty: the group's photos.
    listingImages:      {type: "mediaIdArray", required: false, publicAccess: true},
    // Its own price list replaces the group's whole list (day, weekend, week, seasons) when `dailyRate` is set.
    dailyRate:          {type: "number", required: false, min: 0},
    weekendDailyRate:   {type: "number", required: false, min: 0},
    weeklyRate:         {type: "number", required: false, min: 0},
    rateSeasons:        {type: "embeddedArray", required: false, items: VehicleCategorySeasonDef, maxItems: VEHICLE_CATEGORY_SEASONS_MAX_ITEMS},
    // Its own deposit; empty: the group's.
    depositAmount:      {type: "number", required: false, min: 0},
    // Its own specs where they differ from its category's (TD-B291); empty: the category's.
    seats:              {type: "number", required: false, ...VEHICLE_SEATS},
    doors:              {type: "number", required: false, ...VEHICLE_DOORS},
    luggage:            {type: "number", required: false, ...VEHICLE_LUGGAGE},
    transmission:       {type: "enum", required: false, options: VEHICLE_TRANSMISSIONS},
    fuelType:           {type: "enum", required: false, options: VEHICLE_FUEL_TYPES},
} as const;

export type CreateVehicleFormType = InferCreateForm<typeof VehicleSchemaDef>;
export type EditVehicleFormType = InferEditForm<typeof VehicleSchemaDef>;

export type SetVehicleReadinessFormType = InferCreateForm<typeof SetVehicleReadinessFormDef>;
