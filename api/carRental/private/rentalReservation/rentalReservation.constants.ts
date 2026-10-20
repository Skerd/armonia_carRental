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
export const RENTAL_PAYMENT_CHOICES = ["pay_at_pickup", "online"] as const;
export type RentalPaymentChoice = (typeof RENTAL_PAYMENT_CHOICES)[number];

export const RENTAL_RESERVATION_SOURCES = ["online", "staff"] as const;
export const RENTAL_CANCELLED_BY = ["customer", "staff", "system"] as const;
export const RENTAL_FUEL_LEVELS = ["empty", "quarter", "half", "three_quarters", "full"] as const;

export const RENTAL_TIMELINE_EVENTS = [
    "created",
    "payment_received",
    "payment_failed",
    "confirmed",
    "vehicle_reassigned",
    "handover",
    "extended",
    "returned",
    "cancelled",
    "expired",
    "no_show",
    "refunded",
] as const;
export type RentalTimelineEvent = (typeof RENTAL_TIMELINE_EVENTS)[number];

/** Pricing line kinds on a quote and on a reservation's snapshot. */
export const RENTAL_PRICE_LINE_KINDS = ["rental", "extra", "extension", "charge"] as const;
export type RentalPriceLineKind = (typeof RENTAL_PRICE_LINE_KINDS)[number];

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
