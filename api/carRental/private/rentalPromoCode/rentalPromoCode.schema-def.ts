import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const RENTAL_PROMO_CODE_TYPES = ["percent", "fixed"] as const;
export const RENTAL_PROMO_CODE_CODE_MAX = 32;
export const RENTAL_PROMO_CODE_DESCRIPTION_MAX = 500;

/** A discount code customers enter when booking. It reduces the rental days only. */
export const RentalPromoCodeSchemaDef = {
    code:               {type: "string", required: true, min: 1, max: RENTAL_PROMO_CODE_CODE_MAX},
    type:               {type: "enum", required: true, options: RENTAL_PROMO_CODE_TYPES},
    value:              {type: "number", required: true, min: 0},
    category:           {type: "objectId", required: false},
    bookableFrom:       {type: "date", required: false},
    bookableUntil:      {type: "date", required: false},
    tripFrom:           {type: "date", required: false},
    tripUntil:          {type: "date", required: false},
    minRentalDays:      {type: "number", required: false, min: 1},
    usageLimit:         {type: "number", required: false, min: 1},
    usageLimitPerEmail: {type: "number", required: false, min: 1},
    isActive:           {type: "boolean", required: false},
    description:        {type: "string", required: false, max: RENTAL_PROMO_CODE_DESCRIPTION_MAX},
} as const;

export type CreateRentalPromoCodeFormType = InferCreateForm<typeof RentalPromoCodeSchemaDef>;
export type EditRentalPromoCodeFormType = InferEditForm<typeof RentalPromoCodeSchemaDef>;
