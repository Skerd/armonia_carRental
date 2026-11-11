import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const RENTAL_REVIEW_COMMENT_MAX = 2000;
export const RENTAL_REVIEW_AUTHOR_NAME_MAX = 128;

/** A customer's review of a completed rental. Publishing is the publish action, not a form field. */
export const RentalReviewSchemaDef = {
    reservation: {type: "objectId", required: true},
    rating:      {type: "number", required: true, min: 1, max: 5},
    comment:     {type: "string", required: false, max: RENTAL_REVIEW_COMMENT_MAX},
    authorName:  {type: "string", required: true, min: 1, max: RENTAL_REVIEW_AUTHOR_NAME_MAX},
} as const;

export type CreateRentalReviewFormType = InferCreateForm<typeof RentalReviewSchemaDef>;
export type EditRentalReviewFormType = InferEditForm<typeof RentalReviewSchemaDef>;
