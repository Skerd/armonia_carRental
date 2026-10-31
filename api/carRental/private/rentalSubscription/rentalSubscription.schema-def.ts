import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const RENTAL_SUBSCRIPTION_PERIODS = ["week", "month"] as const;
export const RENTAL_SUBSCRIPTION_STATUSS = ["active", "paused", "ended"] as const;
export const RENTAL_SUBSCRIPTION_CONTACT_NAME_MAX = 128;
export const RENTAL_SUBSCRIPTION_EMAIL_MAX = 128;
export const RENTAL_SUBSCRIPTION_PHONE_MAX = 32;

/** A repeating booking of one category, created by the subscription job. */
export const RentalSubscriptionSchemaDef = {
    contactName:    {type: "string", required: true, min: 1, max: RENTAL_SUBSCRIPTION_CONTACT_NAME_MAX},
    email:          {type: "string", required: true, min: 1, max: RENTAL_SUBSCRIPTION_EMAIL_MAX},
    phone:          {type: "string", required: true, min: 1, max: RENTAL_SUBSCRIPTION_PHONE_MAX},
    category:       {type: "objectId", required: true},
    pickupLocation: {type: "objectId", required: true},
    businessAccount:{type: "objectId", required: false},
    period:         {type: "enum", required: true, options: RENTAL_SUBSCRIPTION_PERIODS},
    price:          {type: "number", required: true, min: 0},
    status:         {type: "enum", required: true, options: RENTAL_SUBSCRIPTION_STATUSS},
    nextRunAt:      {type: "date", required: true},
} as const;

export type CreateRentalSubscriptionFormType = InferCreateForm<typeof RentalSubscriptionSchemaDef>;
export type EditRentalSubscriptionFormType = InferEditForm<typeof RentalSubscriptionSchemaDef>;
