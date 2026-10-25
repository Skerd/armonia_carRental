import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {WeeklyHoursSlotDef} from "../../../../../core/helpers/weeklyHours.schema-def";

export const RENTAL_LOCATION_NAME_MAX = 128;
export const RENTAL_LOCATION_PHONE_MAX = 32;
export const RENTAL_LOCATION_STREET_MAX = 256;
export const RENTAL_LOCATION_POSTAL_CODE_MAX = 32;
export const RENTAL_LOCATION_TIMEZONE_MAX = 64;
export const RENTAL_LOCATION_CLOSURE_REASON_MAX = 128;
export const RENTAL_LOCATION_HOURS_MAX_ITEMS = 21;
export const RENTAL_LOCATION_CLOSURES_MAX_ITEMS = 120;

const RentalLocationAddressDef = {
    country:    {type: "objectId", required: false},
    city:       {type: "objectId", required: false},
    street:     {type: "string", required: false, max: RENTAL_LOCATION_STREET_MAX},
    postalCode: {type: "string", required: false, max: RENTAL_LOCATION_POSTAL_CODE_MAX},
    latitude:   {type: "number", required: false, min: -90, max: 90},
    longitude:  {type: "number", required: false, min: -180, max: 180},
} as const;

/** A whole local day the location is closed (public holiday, inventory day). */
const RentalLocationClosureDef = {
    date:   {type: "string", required: true, format: "localDate"},
    reason: {type: "string", required: false, max: RENTAL_LOCATION_CLOSURE_REASON_MAX},
} as const;

export const RentalLocationSchemaDef = {
    name:          {type: "string", required: true, min: 1, max: RENTAL_LOCATION_NAME_MAX},
    phone:         {type: "string", required: false, max: RENTAL_LOCATION_PHONE_MAX},
    email:         {type: "string", required: false, format: "email"},
    address:       {type: "embedded", required: false, items: RentalLocationAddressDef},
    /** IANA zone the opening hours and every pickup/return time here are expressed in. */
    timezone:      {type: "string", required: true, min: 1, max: RENTAL_LOCATION_TIMEZONE_MAX},
    openingHours:  {type: "embeddedArray", required: false, items: WeeklyHoursSlotDef, maxItems: RENTAL_LOCATION_HOURS_MAX_ITEMS},
    closures:      {type: "embeddedArray", required: false, items: RentalLocationClosureDef, maxItems: RENTAL_LOCATION_CLOSURES_MAX_ITEMS},
    pickupAllowed: {type: "boolean", required: false},
    returnAllowed: {type: "boolean", required: false},
} as const;

export type CreateRentalLocationFormType = InferCreateForm<typeof RentalLocationSchemaDef>;
export type EditRentalLocationFormType = InferEditForm<typeof RentalLocationSchemaDef>;
