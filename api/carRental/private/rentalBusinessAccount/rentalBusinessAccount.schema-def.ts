import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const RENTAL_BUSINESS_ACCOUNT_NAME_MAX = 128;
export const RENTAL_BUSINESS_ACCOUNT_VAT_NUMBER_MAX = 32;
export const RENTAL_BUSINESS_ACCOUNT_BILLING_EMAIL_MAX = 128;
export const RENTAL_BUSINESS_ACCOUNT_ADDRESS_MAX = 300;
export const RENTAL_BUSINESS_ACCOUNT_NOTES_MAX = 2000;

/** A company that books on account: its discount, VAT number and billing address. */
export const RentalBusinessAccountSchemaDef = {
    name:             {type: "string", required: true, min: 1, max: RENTAL_BUSINESS_ACCOUNT_NAME_MAX},
    vatNumber:        {type: "string", required: true, min: 1, max: RENTAL_BUSINESS_ACCOUNT_VAT_NUMBER_MAX},
    billingEmail:     {type: "string", required: true, min: 1, max: RENTAL_BUSINESS_ACCOUNT_BILLING_EMAIL_MAX},
    address:          {type: "string", required: false, max: RENTAL_BUSINESS_ACCOUNT_ADDRESS_MAX},
    discountPercent:  {type: "number", required: false, min: 0, max: 100},
    paymentTermsDays: {type: "number", required: false, min: 0},
    isActive:         {type: "boolean", required: false},
    notes:            {type: "string", required: false, max: RENTAL_BUSINESS_ACCOUNT_NOTES_MAX},
} as const;

export type CreateRentalBusinessAccountFormType = InferCreateForm<typeof RentalBusinessAccountSchemaDef>;
export type EditRentalBusinessAccountFormType = InferEditForm<typeof RentalBusinessAccountSchemaDef>;
