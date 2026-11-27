import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    VEHICLE_DOORS,
    VEHICLE_FUEL_TYPES,
    VEHICLE_SEATS,
    VEHICLE_TRANSMISSIONS,
} from "../vehicleCategory/vehicleCategory.schema-def";

/**
 * The platform's vehicle catalog (D199): one tree of vehicle types, their makes and the makes' models, owned by the
 * platform company and shared by every company, like the product and service categories (D195, D196).
 */
export const VEHICLE_CATALOG_LEVELS = ["type", "make", "model"] as const;
export type VehicleCatalogLevel = (typeof VEHICLE_CATALOG_LEVELS)[number];

/** A model's body, so a car form and a fleet list can say "SUV" or "convertible". */
export const VEHICLE_BODY_STYLES = [
    "hatchback", "sedan", "estate", "suv", "coupe", "convertible", "minivan", "pickup", "van", "motorcycle", "scooter", "truck", "bus", "other",
] as const;
export type VehicleBodyStyle = (typeof VEHICLE_BODY_STYLES)[number];

export const VEHICLE_CATALOG_NAME_MAX = 128;
export const VEHICLE_CATALOG_YEAR = {min: 1900, max: 2100} as const;

/** An entry's name in each panel language; `name` is the English one. Makes and models are brand names, the same in all. */
export const VehicleCatalogNamesDef = {
    en: {type: "string", required: false, max: VEHICLE_CATALOG_NAME_MAX},
    sq: {type: "string", required: false, max: VEHICLE_CATALOG_NAME_MAX},
    de: {type: "string", required: false, max: VEHICLE_CATALOG_NAME_MAX},
    fr: {type: "string", required: false, max: VEHICLE_CATALOG_NAME_MAX},
    it: {type: "string", required: false, max: VEHICLE_CATALOG_NAME_MAX},
} as const;

export const VehicleCatalogSchemaDef = {
    name:         {type: "string", required: true, min: 1, max: VEHICLE_CATALOG_NAME_MAX},
    names:        {type: "embedded", required: false, items: VehicleCatalogNamesDef},
    level:        {type: "enum", required: true, options: VEHICLE_CATALOG_LEVELS},
    /** A make's type, a model's make; a type has none. */
    parentEntry:  {type: "objectId", required: false},
    order:        {type: "number", required: false, min: 0},
    // A model's typical specs, which fill a car's own specs when staff pick the model (D199).
    bodyStyle:    {type: "enum", required: false, options: VEHICLE_BODY_STYLES},
    seats:        {type: "number", required: false, ...VEHICLE_SEATS},
    doors:        {type: "number", required: false, ...VEHICLE_DOORS},
    fuelType:     {type: "enum", required: false, options: VEHICLE_FUEL_TYPES},
    transmission: {type: "enum", required: false, options: VEHICLE_TRANSMISSIONS},
    yearFrom:     {type: "number", required: false, ...VEHICLE_CATALOG_YEAR},
    yearTo:       {type: "number", required: false, ...VEHICLE_CATALOG_YEAR},
} as const;

export type CreateVehicleCatalogFormType = InferCreateForm<typeof VehicleCatalogSchemaDef>;
export type EditVehicleCatalogFormType = InferEditForm<typeof VehicleCatalogSchemaDef>;
