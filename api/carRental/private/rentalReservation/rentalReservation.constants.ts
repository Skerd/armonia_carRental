/**
 * held        — waiting for online payment; blocks the vehicle only until `holdExpiresAt`
 * confirmed   — booked; blocks the vehicle
 * in_progress — vehicle handed over
 * completed   — vehicle returned
 * cancelled / expired / no_show — closed without a rental
 */
export const RENTAL_RESERVATION_STATUSES = ["held", "confirmed", "in_progress", "completed", "cancelled", "expired", "no_show"] as const;
export type RentalReservationStatus = (typeof RENTAL_RESERVATION_STATUSES)[number];

/** Statuses whose window keeps the vehicle busy (a `held` one only while its hold lasts). */
export const RENTAL_BLOCKING_STATUSES: readonly RentalReservationStatus[] = ["held", "confirmed", "in_progress"];

/** Money state, derived from the payment ledger; independent of the booking status. */
export const RENTAL_PAYMENT_STATUSES = ["unpaid", "pending", "paid", "partially_refunded", "refunded", "failed"] as const;
export type RentalPaymentStatus = (typeof RENTAL_PAYMENT_STATUSES)[number];

/** How this booking is being paid, resolved from the company policy and the customer's choice. */
export const RENTAL_PAYMENT_CHOICES = ["pay_at_pickup", "online", "on_account"] as const;
export type RentalPaymentChoice = (typeof RENTAL_PAYMENT_CHOICES)[number];

export const RENTAL_RESERVATION_SOURCES = ["online", "staff"] as const;
export const RENTAL_CANCELLED_BY = ["customer", "staff", "system"] as const;
export const RENTAL_FUEL_LEVELS = ["empty", "quarter", "half", "three_quarters", "full"] as const;

/** The primary driver signs the agreement; additional drivers may drive too. */
export const RENTAL_DRIVER_ROLES = ["primary", "additional"] as const;
export type RentalDriverRole = (typeof RENTAL_DRIVER_ROLES)[number];
export const RENTAL_ID_DOCUMENT_TYPES = ["passport", "national_id", "other"] as const;

/**
 * How a deposit is taken: a hold on the card for rentals of up to `RENTAL_CARD_HOLD_MAX_DAYS`
 * (card holds expire after about a week), a card saved for later charges for longer ones, or cash.
 */
export const RENTAL_DEPOSIT_METHODS = ["card_hold", "saved_card", "cash"] as const;
export type RentalDepositMethod = (typeof RENTAL_DEPOSIT_METHODS)[number];
export const RENTAL_DEPOSIT_STATUSES = ["pending", "held", "captured", "released", "failed"] as const;
export type RentalDepositStatus = (typeof RENTAL_DEPOSIT_STATUSES)[number];
export const RENTAL_CARD_HOLD_MAX_DAYS = 7;
/** What staff choose at the counter; the card method follows from the rental length. */
export const RENTAL_DEPOSIT_CHOICES = ["card", "cash"] as const;

export const RENTAL_TIMELINE_EVENTS = [
    "created",
    "payment_received",
    "payment_failed",
    "confirmed",
    "vehicle_reassigned",
    "drivers_updated",
    "handover",
    "extended",
    "returned",
    "charge_added",
    "charge_removed",
    "deposit_held",
    "deposit_captured",
    "deposit_released",
    "cancelled",
    "expired",
    "no_show",
    "refunded",
] as const;
export type RentalTimelineEvent = (typeof RENTAL_TIMELINE_EVENTS)[number];

/** Pricing line kinds on a quote and on a reservation's snapshot. A `discount` line has a negative total. */
export const RENTAL_PRICE_LINE_KINDS = ["rental", "extra", "extension", "charge", "fee", "discount"] as const;
export type RentalPriceLineKind = (typeof RENTAL_PRICE_LINE_KINDS)[number];

/** What a fee, discount or charge line is for, so it can be found and recomputed. */
export const RENTAL_PRICE_LINE_CODES = [
    "young_driver",
    "additional_driver",
    "one_way",
    "promo",
    "account",
    "cross_border",
    "extra_km",
    "fuel",
    "refuel_service",
    "late_return",
    "cleaning",
    "smoking",
    "damage",
    "fine",
    "fine_admin",
    "car_transfer",
] as const;
export type RentalPriceLineCode = (typeof RENTAL_PRICE_LINE_CODES)[number];

/** `purpose` of the guest "manage your booking" link. */
export const RENTAL_RESERVATION_LINK_PURPOSE = "rentalReservation";

export const RENTAL_CONTACT_NAME_MAX = 64;
export const RENTAL_CONTACT_PHONE_MAX = 32;
export const RENTAL_NOTES_MAX = 2000;
export const RENTAL_REASON_MAX = 500;
export const RENTAL_CHARGE_LABEL_MAX = 128;
export const RENTAL_IDEMPOTENCY_KEY = {min: 8, max: 64} as const;
export const RENTAL_EXTRAS_MAX_ITEMS = 20;
export const RENTAL_CHARGES_MAX_ITEMS = 20;
export const RENTAL_DRIVERS_MAX_ITEMS = 4;
export const RENTAL_PROMO_CODE_INPUT_MAX = 32;
export const RENTAL_SIGNER_NAME_MAX = 128;
export const RENTAL_NEW_DAMAGES_MAX_ITEMS = 10;
export const RENTAL_DOCUMENT_NUMBER_MAX = 32;
export const RENTAL_LICENSE_COUNTRY_MAX = 64;
