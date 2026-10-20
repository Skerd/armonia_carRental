import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** How a customer settles a booking: at the counter, online when booking, or their choice. */
export const RENTAL_PAYMENT_POLICIES = ["pay_at_pickup", "prepay_online", "customer_choice"] as const;
export type RentalPaymentPolicy = (typeof RENTAL_PAYMENT_POLICIES)[number];

export const RENTAL_MIN_RENTAL_HOURS = {min: 1, max: 720} as const;
export const RENTAL_MAX_RENTAL_DAYS = {min: 1, max: 365} as const;
export const RENTAL_LEAD_TIME_HOURS = {min: 0, max: 720} as const;
export const RENTAL_ADVANCE_DAYS = {min: 1, max: 730} as const;
export const RENTAL_TURNAROUND_MINUTES = {min: 0, max: 1440} as const;
export const RENTAL_HOLD_MINUTES = {min: 5, max: 120} as const;
export const RENTAL_LATE_GRACE_MINUTES = {min: 0, max: 720} as const;
export const RENTAL_FREE_CANCELLATION_HOURS = {min: 0, max: 720} as const;
export const RENTAL_PERCENT = {min: 0, max: 100} as const;
export const RENTAL_TERMS_VERSION_MAX = 32;
export const RENTAL_TERMS_TEXT_MAX = 20000;

export const CarRentalConfigSchemaDef = {
    publicBookingEnabled:    {type: "boolean", required: false},
    currency:                {type: "objectId", required: true},
    minRentalHours:          {type: "number", required: true, ...RENTAL_MIN_RENTAL_HOURS},
    maxRentalDays:           {type: "number", required: true, ...RENTAL_MAX_RENTAL_DAYS},
    minLeadTimeHours:        {type: "number", required: true, ...RENTAL_LEAD_TIME_HOURS},
    maxAdvanceDays:          {type: "number", required: true, ...RENTAL_ADVANCE_DAYS},
    turnaroundBufferMinutes: {type: "number", required: true, ...RENTAL_TURNAROUND_MINUTES},
    holdMinutes:             {type: "number", required: true, ...RENTAL_HOLD_MINUTES},
    lateGraceMinutes:        {type: "number", required: true, ...RENTAL_LATE_GRACE_MINUTES},
    paymentPolicy:           {type: "enum", required: true, options: RENTAL_PAYMENT_POLICIES},
    freeCancellationHours:   {type: "number", required: true, ...RENTAL_FREE_CANCELLATION_HOURS},
    cancellationFeePercent:  {type: "number", required: true, ...RENTAL_PERCENT},
    vatRate:                 {type: "number", required: true, ...RENTAL_PERCENT},
    pricesIncludeVat:        {type: "boolean", required: false},
    guestBookingAllowed:     {type: "boolean", required: false},
    termsVersion:            {type: "string", required: false, max: RENTAL_TERMS_VERSION_MAX},
    termsText:               {type: "string", required: false, max: RENTAL_TERMS_TEXT_MAX},
    notifyUsers:             {type: "objectIdArray", required: false},
} as const;

export type CreateCarRentalConfigFormType = InferCreateForm<typeof CarRentalConfigSchemaDef>;
export type EditCarRentalConfigFormType = InferEditForm<typeof CarRentalConfigSchemaDef>;
