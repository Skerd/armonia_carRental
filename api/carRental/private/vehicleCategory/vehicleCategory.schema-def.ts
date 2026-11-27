import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const VEHICLE_TRANSMISSIONS = ["manual", "automatic"] as const;
export const VEHICLE_FUEL_TYPES = ["petrol", "diesel", "hybrid", "electric", "other"] as const;
/** `limited`: `includedKmPerDay` free, then `extraKmPrice` per km, settled at return. */
export const VEHICLE_MILEAGE_POLICIES = ["unlimited", "limited"] as const;

export const VEHICLE_CATEGORY_NAME_MAX = 128;
export const VEHICLE_CATEGORY_SLUG_MAX = 128;
export const VEHICLE_CATEGORY_DESCRIPTION_MAX = 4000;
export const VEHICLE_CATEGORY_FEATURE_MAX = 64;
export const VEHICLE_CATEGORY_FEATURES_MAX_ITEMS = 30;
export const VEHICLE_CATEGORY_SEASONS_MAX_ITEMS = 50;
export const VEHICLE_SEATS = {min: 1, max: 60} as const;
export const VEHICLE_DOORS = {min: 0, max: 10} as const;
export const VEHICLE_LUGGAGE = {min: 0, max: 20} as const;
export const VEHICLE_DRIVER_AGE = {min: 16, max: 99} as const;

/** A dated price override, inclusive of both local dates (summer, holidays). */
/** A dated price per day; a car with its own prices (D198) has its own list of these. */
export const VehicleCategorySeasonDef = {
    startDate: {type: "string", required: true, format: "localDate"},
    endDate:   {type: "string", required: true, format: "localDate"},
    dailyRate: {type: "number", required: true, min: 0},
} as const;

export const VehicleCategorySchemaDef = {
    name:             {type: "string", required: true, min: 1, max: VEHICLE_CATEGORY_NAME_MAX},
    slug:             {type: "string", required: false, min: 1, max: VEHICLE_CATEGORY_SLUG_MAX, format: "slug"},
    description:      {type: "string", required: false, max: VEHICLE_CATEGORY_DESCRIPTION_MAX},
    images:           {type: "mediaIdArray", required: false, publicAccess: true},
    videos:           {type: "mediaIdArray", required: false, publicAccess: true},
    seats:            {type: "number", required: true, ...VEHICLE_SEATS},
    doors:            {type: "number", required: false, ...VEHICLE_DOORS},
    luggage:          {type: "number", required: false, ...VEHICLE_LUGGAGE},
    transmission:     {type: "enum", required: true, options: VEHICLE_TRANSMISSIONS},
    fuelType:         {type: "enum", required: true, options: VEHICLE_FUEL_TYPES},
    features:         {type: "stringArray", required: false, maxItems: VEHICLE_CATEGORY_FEATURES_MAX_ITEMS, itemMax: VEHICLE_CATEGORY_FEATURE_MAX},
    dailyRate:        {type: "number", required: true, min: 0},
    weekendDailyRate: {type: "number", required: false, min: 0},
    weeklyRate:       {type: "number", required: false, min: 0},
    rateSeasons:      {type: "embeddedArray", required: false, items: VehicleCategorySeasonDef, maxItems: VEHICLE_CATEGORY_SEASONS_MAX_ITEMS},
    depositAmount:    {type: "number", required: false, min: 0},
    mileagePolicy:    {type: "enum", required: true, options: VEHICLE_MILEAGE_POLICIES},
    includedKmPerDay: {type: "number", required: false, min: 0},
    extraKmPrice:     {type: "number", required: false, min: 0},
    minDriverAge:        {type: "number", required: false, ...VEHICLE_DRIVER_AGE},
    crossBorderAllowed:  {type: "boolean", required: false},
    crossBorderFee:      {type: "number", required: false, min: 0},
    isPublic:            {type: "boolean", required: false},
    /**
     * The group is booked as a class ("or similar", any free car of it). Off: the group is only a heading for its cars
     * rented on their own (D198). Unset counts as on.
     */
    soldAsClass:         {type: "boolean", required: false},
    sortOrder:        {type: "number", required: false},
} as const;

export type CreateVehicleCategoryFormType = InferCreateForm<typeof VehicleCategorySchemaDef>;
export type EditVehicleCategoryFormType = InferEditForm<typeof VehicleCategorySchemaDef>;

/** The "Car prices" dialog on a category (D198): each of its cars rented on its own or not, at its own day price and deposit. */
export const CAR_PRICES_MAX_CARS = 500;

export const CarPriceRowDef = {
    vehicle:       {type: "objectId", required: true},
    listedAlone:   {type: "boolean", required: true},
    /** Empty: the car follows the category's prices again. */
    dailyRate:     {type: "number", required: false, min: 0},
    /** Empty: the category's deposit. */
    depositAmount: {type: "number", required: false, min: 0},
} as const;

export const SetCarPricesFormDef = {
    _id:  {type: "objectId", required: true},
    cars: {type: "embeddedArray", required: true, items: CarPriceRowDef, maxItems: CAR_PRICES_MAX_CARS},
} as const;
export type SetCarPricesFormType = InferCreateForm<typeof SetCarPricesFormDef>;

