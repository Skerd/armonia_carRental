import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {WeeklyHoursSlot} from "../../../../../core/helpers/weeklyHours.schema-def";
import type {RentalPaymentPolicy} from "../../private/carRentalConfig/carRentalConfig.schema-def";
import type {RentalExtraKind, RentalExtraPricing} from "../../private/rentalExtra/rentalExtra.schema-def";
import type {VehicleColor} from "../../private/vehicle/vehicle.schema-def";
import type {VEHICLE_FUEL_TYPES, VEHICLE_MILEAGE_POLICIES, VEHICLE_TRANSMISSIONS} from "../../private/vehicleCategory/vehicleCategory.schema-def";
import type {RentalContact, RentalDriver, RentalPricing} from "../../private/rentalReservation/rentalReservation.dto";
import type {RentalPaymentChoice, RentalPaymentStatus, RentalReservationStatus} from "../../private/rentalReservation/rentalReservation.constants";

export type RentalStorefrontLocation = {
    _id: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
    timezone: string;
    openingHours: WeeklyHoursSlot[];
    closures: string[];
    pickupAllowed: boolean;
    returnAllowed: boolean;
};

export type RentalStorefrontExtra = {
    _id: string;
    name: string;
    kind: RentalExtraKind;
    description?: string;
    pricing: RentalExtraPricing;
    price: number;
    maxQuantity: number;
    /** Protection only. */
    excessAmount?: number;
    depositAmount?: number;
};

export type RentalStorefrontCategory = {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    images: string[];
    videos: string[];
    seats: number;
    doors?: number;
    luggage?: number;
    transmission: (typeof VEHICLE_TRANSMISSIONS)[number];
    fuelType: (typeof VEHICLE_FUEL_TYPES)[number];
    features: string[];
    dailyRate: number;
    depositAmount: number;
    mileagePolicy: (typeof VEHICLE_MILEAGE_POLICIES)[number];
    includedKmPerDay?: number;
    extraKmPrice?: number;
    minDriverAge?: number;
    crossBorderAllowed: boolean;
    crossBorderFee?: number;
    /** Booked as a class ("or similar"); off when the group only heads its cars rented on their own (D198). */
    soldAsClass: boolean;
};

/**
 * A car rented on its own (D198): this exact car, never "or similar". Its specs are its own where it has them, else its
 * group's (TD-B291); km policy, driver age and cross-border rules are always its group's (`category`). The plate is never
 * sent.
 */
export type RentalStorefrontCar = {
    _id: string;
    category: string;
    title: string;
    make: string;
    model: string;
    year?: number;
    /** A code of `VEHICLE_COLORS`; the site shows it in the reader's language. */
    color?: VehicleColor;
    description?: string;
    /** Its listing photos, else the group's. */
    images: string[];
    dailyRate: number;
    depositAmount: number;
    seats: number;
    doors?: number;
    luggage?: number;
    transmission: (typeof VEHICLE_TRANSMISSIONS)[number];
    fuelType: (typeof VEHICLE_FUEL_TYPES)[number];
};

/** Everything the public site needs to render before the first search. */
export type RentalStorefrontConfigResponse = {
    data: {
        company: {name: string; logo?: string; email?: string; phoneNumber?: string; website?: string};
        currency: CurrencySimple;
        /** The policy in force: pay at pickup while card payments are coming soon (D190), whatever the company chose. */
        paymentPolicy: RentalPaymentPolicy;
        onlinePaymentAvailable: boolean;
        stripePublishableKey?: string;
        guestBookingAllowed: boolean;
        minRentalHours: number;
        maxRentalDays: number;
        minLeadTimeHours: number;
        maxAdvanceDays: number;
        freeCancellationHours: number;
        cancellationFeePercent: number;
        vatRate: number;
        pricesIncludeVat: boolean;
        termsVersion?: string;
        termsText?: string;
        locations: RentalStorefrontLocation[];
        /** Every public group, classes and the groups that only head cars rented on their own. */
        categories: RentalStorefrontCategory[];
        cars: RentalStorefrontCar[];
        extras: RentalStorefrontExtra[];
    };
};

/** A price shown before booking; the same shape a reservation keeps. */
export type RentalQuote = RentalPricing;

export type RentalSearchResponse = {
    data: {
        pickupAt: string;
        returnAt: string;
        /** The groups booked as a class. */
        results: {category: RentalStorefrontCategory; available: boolean; quote: RentalQuote}[];
        /**
         * The cars rented on their own, free for the trip and at the pickup branch then (or brought there for the
         * transfer fee in the quote, when the company allows it).
         */
        cars: {car: RentalStorefrontCar; quote: RentalQuote}[];
    };
};

export type RentalQuoteResponse = {data: RentalQuote};

/** What a customer (signed in or holding the link) may see of their reservation. */
export type PublicRentalReservation = {
    _id: string;
    number: string;
    status: RentalReservationStatus;
    categoryName: string;
    /** This exact car was booked (D198): its name, which replaces "or similar". */
    exactVehicle: boolean;
    vehicleTitle?: string;
    vehicleLabel?: string;
    pickupLocationName: string;
    pickupAddress?: string;
    returnLocationName: string;
    returnAddress?: string;
    timezone: string;
    pickupAt: string;
    returnAt: string;
    holdExpiresAt?: string;
    contact: RentalContact;
    pricing: RentalQuote;
    extras: {extraId: string; name: string; quantity: number; total: number}[];
    paymentChoice: RentalPaymentChoice;
    paymentStatus: RentalPaymentStatus;
    amountPaid: number;
    amountDue: number;
    freeCancellationUntil: string;
    cancellationFeePercent: number;
    canCancel: boolean;
    canExtend: boolean;
    canAddExtras: boolean;
    /** What is due can be paid by card online (never while card payments are coming soon, D190). */
    canPayBalance: boolean;
    canUploadDocuments: boolean;
    canReview: boolean;
    hasAgreement: boolean;
    crossBorder: boolean;
    driver?: {
        licenseNumber?: string;
        licenseCountry?: string;
        licenseIssuedAt?: string;
        licenseExpiresAt?: string;
        idDocumentType?: RentalDriver["idDocumentType"];
        idDocumentNumber?: string;
        documents: number;
    };
    invoices: {id: string; number: string; total: number}[];
};

export type RentalBookingResponse = {
    data: {
        reservation: PublicRentalReservation;
        /** Guest link token for the "manage your booking" page. */
        manageToken: string;
        /** Present when the customer pays online now. */
        payment?: {clientSecret: string; publishableKey: string};
    };
};

export type PublicRentalReservationResponse = {data: PublicRentalReservation};

/** A manage-page change, with a card form when the customer chose to pay the difference now. */
export type PublicRentalChangeResponse = {
    data: PublicRentalReservation;
    payment?: {clientSecret: string; publishableKey: string};
};

/** A portal account's reservations across rental companies, each with its company and manage link token. */
export type RentalMyReservationsResponse = {
    data: {
        reservation: PublicRentalReservation;
        company: {
            name: string;
            slug: string
        };
        manageToken: string
    }[];
};
export type PublicRentalReservationsResponse = {data: PublicRentalReservation[]};

/** One published review of a car class (D178). */
export type RentalPublishedReview = {
    /** The review's id, for reporting it to the platform (D191). */
    _id: string;
    rating: number;
    comment?: string;
    authorName?: string;
    createdAt: string;
};

/** A car class's published reviews: the average out of 5, how many, and the latest ones. */
export type RentalCategoryReviewsResponse = {
    data: {average: number; count: number; reviews: RentalPublishedReview[]};
};

