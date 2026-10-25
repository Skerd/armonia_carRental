import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {RENTAL_EXTRA_QUANTITY} from "../rentalExtra/rentalExtra.schema-def";
import {
    RENTAL_CHARGE_LABEL_MAX,
    RENTAL_CHARGES_MAX_ITEMS,
    RENTAL_CONTACT_NAME_MAX,
    RENTAL_CONTACT_PHONE_MAX,
    RENTAL_EXTRAS_MAX_ITEMS,
    RENTAL_FUEL_LEVELS,
    RENTAL_IDEMPOTENCY_KEY,
    RENTAL_NOTES_MAX,
    RENTAL_REASON_MAX,
} from "./rentalReservation.constants";

/**
 * Input shapes for rental reservations. A reservation is never edited as a form:
 * it is created from these commands and then moves only through actions, so these
 * defs describe requests, not the stored document.
 */

export const RentalContactDef = {
    firstName: {type: "string", required: true, min: 1, max: RENTAL_CONTACT_NAME_MAX},
    lastName:  {type: "string", required: true, min: 1, max: RENTAL_CONTACT_NAME_MAX},
    email:     {type: "string", required: true, format: "email"},
    phone:     {type: "string", required: true, min: 1, max: RENTAL_CONTACT_PHONE_MAX},
} as const;

export const RentalExtraSelectionDef = {
    extra:    {type: "objectId", required: true},
    quantity: {type: "number", required: true, ...RENTAL_EXTRA_QUANTITY},
} as const;

/** Where and when: local wall-clock date and time at each location. */
export const RentalTripDef = {
    pickupLocation: {type: "objectId", required: true},
    returnLocation: {type: "objectId", required: true},
    pickupDate:     {type: "string", required: true, format: "localDate"},
    pickupTime:     {type: "string", required: true, format: "timeOfDay"},
    returnDate:     {type: "string", required: true, format: "localDate"},
    returnTime:     {type: "string", required: true, format: "timeOfDay"},
} as const;

/** Staff booking from the panel (phone, walk-in). */
export const CreateRentalReservationFormDef = {
    ...RentalTripDef,
    category:       {type: "objectId", required: true},
    vehicle:        {type: "objectId", required: false},
    extras:         {type: "embeddedArray", required: false, items: RentalExtraSelectionDef, maxItems: RENTAL_EXTRAS_MAX_ITEMS},
    contact:        {type: "embedded", required: true, items: RentalContactDef},
    customer:       {type: "objectId", required: false},
    notes:          {type: "string", required: false, max: RENTAL_NOTES_MAX},
    idempotencyKey: {type: "string", required: true, ...RENTAL_IDEMPOTENCY_KEY},
} as const;
export type CreateRentalReservationFormType = InferCreateForm<typeof CreateRentalReservationFormDef>;

export const RecordRentalPaymentFormDef = {
    _id:    {type: "objectId", required: true},
    amount: {type: "number", required: true, min: 0.01},
    note:   {type: "string", required: false, max: RENTAL_REASON_MAX},
} as const;
export type RecordRentalPaymentFormType = InferCreateForm<typeof RecordRentalPaymentFormDef>;

export const HandoverRentalReservationFormDef = {
    _id:        {type: "objectId", required: true},
    odometerKm: {type: "number", required: true, min: 0},
    fuelLevel:  {type: "enum", required: true, options: RENTAL_FUEL_LEVELS},
    notes:      {type: "string", required: false, max: RENTAL_NOTES_MAX},
} as const;
export type HandoverRentalReservationFormType = InferCreateForm<typeof HandoverRentalReservationFormDef>;

const RentalChargeDef = {
    label:  {type: "string", required: true, min: 1, max: RENTAL_CHARGE_LABEL_MAX},
    amount: {type: "number", required: true, min: 0},
} as const;

export const ReturnRentalReservationFormDef = {
    _id:          {type: "objectId", required: true},
    odometerKm:   {type: "number", required: true, min: 0},
    fuelLevel:    {type: "enum", required: true, options: RENTAL_FUEL_LEVELS},
    notes:        {type: "string", required: false, max: RENTAL_NOTES_MAX},
    damageNoted:  {type: "boolean", required: false},
    extraCharges: {type: "embeddedArray", required: false, items: RentalChargeDef, maxItems: RENTAL_CHARGES_MAX_ITEMS},
} as const;
export type ReturnRentalReservationFormType = InferCreateForm<typeof ReturnRentalReservationFormDef>;

export const CancelRentalReservationFormDef = {
    _id:                  {type: "objectId", required: true},
    reason:               {type: "string", required: false, max: RENTAL_REASON_MAX},
    applyCancellationFee: {type: "boolean", required: false},
} as const;
export type CancelRentalReservationFormType = InferCreateForm<typeof CancelRentalReservationFormDef>;

export const ReassignRentalVehicleFormDef = {
    _id:     {type: "objectId", required: true},
    vehicle: {type: "objectId", required: true},
} as const;
export type ReassignRentalVehicleFormType = InferCreateForm<typeof ReassignRentalVehicleFormDef>;

export const ExtendRentalReservationFormDef = {
    _id:        {type: "objectId", required: true},
    returnDate: {type: "string", required: true, format: "localDate"},
    returnTime: {type: "string", required: true, format: "timeOfDay"},
} as const;
export type ExtendRentalReservationFormType = InferCreateForm<typeof ExtendRentalReservationFormDef>;
