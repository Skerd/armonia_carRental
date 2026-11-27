import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {RENTAL_EXTRA_QUANTITY} from "../rentalExtra/rentalExtra.schema-def";
import {VEHICLE_RECORD_NOTES_MAX} from "../vehicle/vehicle.schema-def";
import {VEHICLE_DAMAGE_AREAS, VEHICLE_DAMAGE_SEVERITIES} from "../vehicleDamage/vehicleDamage.schema-def";
import {
    RENTAL_CHARGE_LABEL_MAX,
    RENTAL_CHARGES_MAX_ITEMS,
    RENTAL_CONTACT_NAME_MAX,
    RENTAL_CONTACT_PHONE_MAX,
    RENTAL_DEPOSIT_CHOICES,
    RENTAL_DOCUMENT_NUMBER_MAX,
    RENTAL_DRIVER_ROLES,
    RENTAL_DRIVERS_MAX_ITEMS,
    RENTAL_EXTRAS_MAX_ITEMS,
    RENTAL_FUEL_LEVELS,
    RENTAL_ID_DOCUMENT_TYPES,
    RENTAL_IDEMPOTENCY_KEY,
    RENTAL_LICENSE_COUNTRY_MAX,
    RENTAL_NEW_DAMAGES_MAX_ITEMS,
    RENTAL_NOTES_MAX,
    RENTAL_PAYMENT_CHOICES,
    RENTAL_PRICE_LINE_CODES,
    RENTAL_PROMO_CODE_INPUT_MAX,
    RENTAL_REASON_MAX,
    RENTAL_SIGNER_NAME_MAX,
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
    /** This exact car at its own prices (D198); needs `vehicle`. Without it a picked car is only the class's assignment. */
    exactVehicle:   {type: "boolean", required: false},
    extras:         {type: "embeddedArray", required: false, items: RentalExtraSelectionDef, maxItems: RENTAL_EXTRAS_MAX_ITEMS},
    contact:        {type: "embedded", required: true, items: RentalContactDef},
    customer:       {type: "objectId", required: false},
    promoCode:       {type: "string", required: false, max: RENTAL_PROMO_CODE_INPUT_MAX},
    businessAccount: {type: "objectId", required: false},
    paymentChoice:   {type: "enum", required: false, options: ["pay_at_pickup", "online", "on_account"]},
    crossBorder:     {type: "boolean", required: false},
    notes:           {type: "string", required: false, max: RENTAL_NOTES_MAX},
    idempotencyKey: {type: "string", required: true, ...RENTAL_IDEMPOTENCY_KEY},
} as const;
export type CreateRentalReservationFormType = InferCreateForm<typeof CreateRentalReservationFormDef>;

/**
 * The stored reservation's fields that a booking request sets as given (TD-B40). The rest (number, status,
 * times, pricing, snapshot, policy, payments, timeline) is server-owned. `validateSchemaDefAgainstMongoose`
 * keeps this aligned with the Mongoose schema.
 */
export const RentalReservationSchemaDef = {
    category:        {type: "objectId", required: true},
    vehicle:         {type: "objectId", required: false},
    exactVehicle:    {type: "boolean", required: false},
    pickupLocation:  {type: "objectId", required: true},
    returnLocation:  {type: "objectId", required: true},
    customer:        {type: "objectId", required: false},
    contact:         {type: "embedded", required: true, items: RentalContactDef},
    businessAccount: {type: "objectId", required: false},
    paymentChoice:   {type: "enum", required: true, options: RENTAL_PAYMENT_CHOICES},
    crossBorder:     {type: "boolean", required: false},
    notes:           {type: "string", required: false, max: RENTAL_NOTES_MAX},
    idempotencyKey:  {type: "string", required: true, ...RENTAL_IDEMPOTENCY_KEY},
} as const;

export const RecordRentalPaymentFormDef = {
    _id:    {type: "objectId", required: true},
    amount: {type: "number", required: true, min: 0.01},
    note:   {type: "string", required: false, max: RENTAL_REASON_MAX},
} as const;
export type RecordRentalPaymentFormType = InferCreateForm<typeof RecordRentalPaymentFormDef>;

/**
 * The car leaves. Photos and the signature are uploaded first and sent as media
 * ids. `acknowledgedDamages` are the car's open damage reports the customer saw.
 * Without a signature the agreement is still made; it is marked unsigned.
 */
export const HandoverRentalReservationFormDef = {
    _id:                 {type: "objectId", required: true},
    odometerKm:          {type: "number", required: true, min: 0},
    fuelLevel:           {type: "enum", required: true, options: RENTAL_FUEL_LEVELS},
    notes:               {type: "string", required: false, max: RENTAL_NOTES_MAX},
    photos:              {type: "mediaIdArray", required: false},
    acknowledgedDamages: {type: "objectIdArray", required: false},
    signature:           {type: "mediaId", required: false},
    signerName:          {type: "string", required: false, max: RENTAL_SIGNER_NAME_MAX},
} as const;
export type HandoverRentalReservationFormType = InferCreateForm<typeof HandoverRentalReservationFormDef>;

const RentalChargeDef = {
    label:  {type: "string", required: true, min: 1, max: RENTAL_CHARGE_LABEL_MAX},
    amount: {type: "number", required: true, min: 0},
    /** Set for a suggested or preset charge, so the line says what it is for. */
    code:   {type: "enum", required: false, options: RENTAL_PRICE_LINE_CODES},
} as const;

/** The readings a return would record, to price km, fuel and lateness before confirming. */
export const PreviewReturnChargesFormDef = {
    _id:        {type: "objectId", required: true},
    odometerKm: {type: "number", required: true, min: 0},
    fuelLevel:  {type: "enum", required: true, options: RENTAL_FUEL_LEVELS},
} as const;
export type PreviewReturnChargesFormType = InferCreateForm<typeof PreviewReturnChargesFormDef>;

/** Damage found at the return; each becomes a damage report linked to the booking. */
const RentalNewDamageDef = {
    area:          {type: "enum", required: true, options: VEHICLE_DAMAGE_AREAS},
    severity:      {type: "enum", required: true, options: VEHICLE_DAMAGE_SEVERITIES},
    description:   {type: "string", required: true, min: 1, max: VEHICLE_RECORD_NOTES_MAX},
    estimatedCost: {type: "number", required: false, min: 0},
    photos:        {type: "mediaIdArray", required: false},
} as const;

export const ReturnRentalReservationFormDef = {
    _id:          {type: "objectId", required: true},
    odometerKm:   {type: "number", required: true, min: 0},
    fuelLevel:    {type: "enum", required: true, options: RENTAL_FUEL_LEVELS},
    notes:        {type: "string", required: false, max: RENTAL_NOTES_MAX},
    damageNoted:  {type: "boolean", required: false},
    extraCharges: {type: "embeddedArray", required: false, items: RentalChargeDef, maxItems: RENTAL_CHARGES_MAX_ITEMS},
    photos:       {type: "mediaIdArray", required: false},
    newDamages:   {type: "embeddedArray", required: false, items: RentalNewDamageDef, maxItems: RENTAL_NEW_DAMAGES_MAX_ITEMS},
} as const;
export type ReturnRentalReservationFormType = InferCreateForm<typeof ReturnRentalReservationFormDef>;

export const CancelRentalReservationFormDef = {
    _id:                  {type: "objectId", required: true},
    reason:               {type: "string", required: false, max: RENTAL_REASON_MAX},
    applyCancellationFee: {type: "boolean", required: false},
} as const;
export type CancelRentalReservationFormType = InferCreateForm<typeof CancelRentalReservationFormDef>;

/** How a moved booking is priced: as booked (a free upgrade), or again for the new car (D198). */
export const RENTAL_REASSIGN_PRICINGS = ["keep", "reprice"] as const;
export type RentalReassignPricing = (typeof RENTAL_REASSIGN_PRICINGS)[number];

/** "Change car": any free car, of the booking's group or another (D198). */
export const ReassignRentalVehicleFormDef = {
    _id:     {type: "objectId", required: true},
    vehicle: {type: "objectId", required: true},
    pricing: {type: "enum", required: false, options: RENTAL_REASSIGN_PRICINGS},
} as const;
export type ReassignRentalVehicleFormType = InferCreateForm<typeof ReassignRentalVehicleFormDef>;

/**
 * A person allowed to drive. Licence details may be missing until pickup: the
 * handover refuses a driver without a licence number or whose licence expires
 * before the return date.
 */
export const RentalDriverDef = {
    role:             {type: "enum", required: true, options: RENTAL_DRIVER_ROLES},
    firstName:        {type: "string", required: true, min: 1, max: RENTAL_CONTACT_NAME_MAX},
    lastName:         {type: "string", required: true, min: 1, max: RENTAL_CONTACT_NAME_MAX},
    birthDate:        {type: "string", required: true, format: "localDate"},
    licenseNumber:    {type: "string", required: false, max: RENTAL_DOCUMENT_NUMBER_MAX},
    licenseCountry:   {type: "string", required: false, max: RENTAL_LICENSE_COUNTRY_MAX},
    licenseIssuedAt:  {type: "string", required: false, format: "localDate"},
    licenseExpiresAt: {type: "string", required: false, format: "localDate"},
    idDocumentType:   {type: "enum", required: false, options: RENTAL_ID_DOCUMENT_TYPES},
    idDocumentNumber: {type: "string", required: false, max: RENTAL_DOCUMENT_NUMBER_MAX},
} as const;
export type RentalDriverFormType = InferCreateForm<typeof RentalDriverDef>;

/** Replaces the whole driver list: exactly one primary driver. */
export const SaveRentalDriversFormDef = {
    _id:     {type: "objectId", required: true},
    drivers: {type: "embeddedArray", required: true, items: RentalDriverDef, maxItems: RENTAL_DRIVERS_MAX_ITEMS},
} as const;
export type SaveRentalDriversFormType = InferCreateForm<typeof SaveRentalDriversFormDef>;

export const ExtendRentalReservationFormDef = {
    _id:        {type: "objectId", required: true},
    returnDate: {type: "string", required: true, format: "localDate"},
    returnTime: {type: "string", required: true, format: "timeOfDay"},
} as const;
export type ExtendRentalReservationFormType = InferCreateForm<typeof ExtendRentalReservationFormDef>;

/** Takes the deposit at the counter: on the customer's card (hold or saved card, by rental length) or in cash. */
export const TakeRentalDepositFormDef = {
    _id:    {type: "objectId", required: true},
    method: {type: "enum", required: true, options: RENTAL_DEPOSIT_CHOICES},
    /** Defaults to the booking's deposit. */
    amount: {type: "number", required: false, min: 0.01},
} as const;
export type TakeRentalDepositFormType = InferCreateForm<typeof TakeRentalDepositFormDef>;

/** Keeps part of the deposit for what is still owed and releases the rest. */
export const SettleRentalDepositFormDef = {
    _id:        {type: "objectId", required: true},
    keepAmount: {type: "number", required: true, min: 0},
} as const;
export type SettleRentalDepositFormType = InferCreateForm<typeof SettleRentalDepositFormDef>;
