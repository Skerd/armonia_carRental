import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const RENTAL_DENY_ENTRY_EMAIL_MAX = 128;
export const RENTAL_DENY_ENTRY_LICENSE_NUMBER_MAX = 64;
export const RENTAL_DENY_ENTRY_REASON_MAX = 500;

/** A customer blocked by email or licence number, checked at booking and at handover. */
export const RentalDenyEntrySchemaDef = {
    email:         {type: "string", required: false, max: RENTAL_DENY_ENTRY_EMAIL_MAX},
    licenseNumber: {type: "string", required: false, max: RENTAL_DENY_ENTRY_LICENSE_NUMBER_MAX},
    reason:        {type: "string", required: true, min: 1, max: RENTAL_DENY_ENTRY_REASON_MAX},
    isActive:      {type: "boolean", required: false},
} as const;

export type CreateRentalDenyEntryFormType = InferCreateForm<typeof RentalDenyEntrySchemaDef>;
export type EditRentalDenyEntryFormType = InferEditForm<typeof RentalDenyEntrySchemaDef>;
