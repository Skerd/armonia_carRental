import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {WeeklyHoursSlot} from "../../../../../core/helpers/weeklyHours.schema-def";
import type {RentalPaymentPolicy} from "../../private/carRentalConfig/carRentalConfig.schema-def";
import type {RentalExtraPricing} from "../../private/rentalExtra/rentalExtra.schema-def";
import type {VEHICLE_FUEL_TYPES, VEHICLE_MILEAGE_POLICIES, VEHICLE_TRANSMISSIONS} from "../../private/vehicleCategory/vehicleCategory.schema-def";
import type {RentalContact, RentalPricing} from "../../private/rentalReservation/rentalReservation.dto";
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
    description?: string;
    pricing: RentalExtraPricing;
    price: number;
    maxQuantity: number;
};

export type RentalStorefrontCategory = {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    images: string[];
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
};

/** Everything the public site needs to render before the first search. */
export type RentalStorefrontConfigResponse = {
    data: {
        company: {name: string; logo?: string; email?: string; phoneNumber?: string; website?: string};
        currency: CurrencySimple;
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
        categories: RentalStorefrontCategory[];
        extras: RentalStorefrontExtra[];
    };
};

/** A price shown before booking; the same shape a reservation keeps. */
export type RentalQuote = RentalPricing;

export type RentalSearchResponse = {
    data: {
        pickupAt: string;
        returnAt: string;
        results: {category: RentalStorefrontCategory; available: boolean; quote: RentalQuote}[];
    };
};

export type RentalQuoteResponse = {data: RentalQuote};

/** What a customer (signed in or holding the link) may see of their reservation. */
export type PublicRentalReservation = {
    _id: string;
    number: string;
    status: RentalReservationStatus;
    categoryName: string;
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
    extras: {name: string; quantity: number; total: number}[];
    paymentChoice: RentalPaymentChoice;
    paymentStatus: RentalPaymentStatus;
    amountPaid: number;
    freeCancellationUntil: string;
    cancellationFeePercent: number;
    canCancel: boolean;
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
export type PublicRentalReservationsResponse = {data: PublicRentalReservation[]};
