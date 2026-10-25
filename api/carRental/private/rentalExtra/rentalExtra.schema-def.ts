import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const RENTAL_EXTRA_PRICINGS = ["per_day", "per_rental"] as const;
export type RentalExtraPricing = (typeof RENTAL_EXTRA_PRICINGS)[number];

export const RENTAL_EXTRA_NAME_MAX = 128;
export const RENTAL_EXTRA_DESCRIPTION_MAX = 1000;
export const RENTAL_EXTRA_QUANTITY = {min: 1, max: 10} as const;

export const RentalExtraSchemaDef = {
    name:        {type: "string", required: true, min: 1, max: RENTAL_EXTRA_NAME_MAX},
    description: {type: "string", required: false, max: RENTAL_EXTRA_DESCRIPTION_MAX},
    pricing:     {type: "enum", required: true, options: RENTAL_EXTRA_PRICINGS},
    price:       {type: "number", required: true, min: 0},
    maxQuantity: {type: "number", required: true, ...RENTAL_EXTRA_QUANTITY},
    sortOrder:   {type: "number", required: false},
} as const;

export type CreateRentalExtraFormType = InferCreateForm<typeof RentalExtraSchemaDef>;
export type EditRentalExtraFormType = InferEditForm<typeof RentalExtraSchemaDef>;
