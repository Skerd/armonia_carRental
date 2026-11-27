import type {VehicleReadiness} from "../vehicle/vehicle.schema-def";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {Media} from "../../../../../core/types";
import type {VehicleCategorySimple} from "../../../../dto/vehicleCategory.dto";
import type {VehicleSimple} from "../../../../dto/vehicle.dto";
import type {RentalLocationSimple} from "../../../../dto/rentalLocation.dto";
import type {RentalExtraSimple} from "../../../../dto/rentalExtra.dto";
import type {RentalExtraPricing} from "../rentalExtra/rentalExtra.schema-def";
import type {
    RENTAL_CANCELLED_BY,
    RENTAL_FUEL_LEVELS,
    RENTAL_ID_DOCUMENT_TYPES,
    RENTAL_RESERVATION_SOURCES,
    RentalDepositMethod,
    RentalDepositStatus,
    RentalDriverRole,
    RentalPriceLineCode,
    RentalPaymentChoice,
    RentalPaymentStatus,
    RentalPriceLineKind,
    RentalReservationStatus,
    RentalTimelineEvent,
} from "./rentalReservation.constants";

export type RentalPriceLine = {
    label: string;
    kind: RentalPriceLineKind;
    code?: RentalPriceLineCode;
    quantity: number;
    unitPrice: number;
    total: number;
    /** The booking's currency, repeated on each line for display. */
    currency?: CurrencySimple;
};

/** Every amount a customer is charged for, fixed when the reservation is made. */
export type RentalPricing = {
    rentalDays: number;
    currency?: CurrencySimple;
    lines: RentalPriceLine[];
    subtotal: number;
    vatRate: number;
    vatAmount: number;
    pricesIncludeVat: boolean;
    grandTotal: number;
    depositAmount: number;
};

export type RentalContact = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

export type RentalDeposit = {
    method: RentalDepositMethod;
    status: RentalDepositStatus;
    amount: number;
    capturedAmount: number;
    /** A card is saved for later charges (fines, damage found later). */
    hasSavedCard: boolean;
    heldAt?: string;
    settledAt?: string;
};

/** The deposit after a staff action, with the card form's secret while the customer still has to confirm it. */
export type RentalDepositResponse = {
    reservation: RentalReservation;
    payment?: {kind: "payment" | "setup"; clientSecret: string; publishableKey: string};
};

export type RentalVehicleCheck = {
    at: string;
    by?: SimpleBlankUser;
    odometerKm: number;
    fuelLevel: (typeof RENTAL_FUEL_LEVELS)[number];
    notes?: string;
    photos?: Media[];
};

/** Dates are local calendar dates (`YYYY-MM-DD`). */
export type RentalDriver = {
    role: RentalDriverRole;
    firstName: string;
    lastName: string;
    birthDate: string;
    licenseNumber?: string;
    licenseCountry?: string;
    licenseIssuedAt?: string;
    licenseExpiresAt?: string;
    idDocumentType?: (typeof RENTAL_ID_DOCUMENT_TYPES)[number];
    idDocumentNumber?: string;
};

export type RentalReservation = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    number: string;
    status: RentalReservationStatus;
    source: (typeof RENTAL_RESERVATION_SOURCES)[number];
    category?: VehicleCategorySimple;
    vehicle?: VehicleSimple;
    /** This exact car was booked, at its own prices (D198); otherwise the class with any of its cars. */
    exactVehicle: boolean;
    pickupLocation?: RentalLocationSimple;
    returnLocation?: RentalLocationSimple;
    pickupAt: string;
    returnAt: string;
    holdExpiresAt?: string;
    customer?: SimpleBlankUser;
    contact: RentalContact;
    drivers: RentalDriver[];
    promoCode?: {code: string};
    extras: {extra?: RentalExtraSimple; name: string; pricing: RentalExtraPricing; unitPrice: number; quantity: number; total: number}[];
    pricing: RentalPricing;
    snapshot: {
        categoryName: string;
        /** The exact car's name when it was booked (D198). */
        vehicleTitle?: string;
        vehicleLabel?: string;
        pickupLocationName: string;
        pickupAddress?: string;
        returnLocationName: string;
        returnAddress?: string;
        timezone: string;
        mileagePolicy: string;
        includedKmPerDay?: number;
        extraKmPrice?: number;
    };
    policy: {
        freeCancellationHours: number;
        cancellationFeePercent: number;
        termsVersion?: string;
    };
    paymentChoice: RentalPaymentChoice;
    paymentStatus: RentalPaymentStatus;
    amountPaid: number;
    notes?: string;
    handover?: RentalVehicleCheck & {acknowledgedDamages: string[]};
    returnInfo?: RentalVehicleCheck & {damageNoted: boolean};
    deposit?: RentalDeposit;
    needsTransfer: boolean;
    /** Made at handover; the PDF is generated on request from this and the booking. */
    agreement?: {signedAt?: string; signerName?: string; signature?: Media; termsVersion?: string};
    timeline: {event: RentalTimelineEvent; at: string; note?: string}[];
    cancelledAt?: string;
    cancelledBy?: (typeof RENTAL_CANCELLED_BY)[number];
    cancellationReason?: string;
};

/** Charges a return would add: worked out from the readings, or offered as presets. */
export type RentalReturnChargesPreview = {
    suggested: {code: RentalPriceLineCode; label: string; amount: number}[];
    presets: {code: RentalPriceLineCode; label: string; amount: number}[];
};

/** A damage report of the car, shown at handover for the customer to acknowledge. */
export type RentalOpenDamage = {_id: string; area: string; severity: string; description: string; photos?: Media[]};

/**
 * How far a booking can be extended on its car: until the next booking or block starts (turnaround kept), in
 * the return location's zone; `closedDays` are the local days the return location is closed until then.
 */
export type RentalExtendWindow = {
    until?: string;
    closedDays: string[];
    timeZone: string;
};

/** A car of the booking's class that is free for its whole window, for "Change car". */
export type RentalFreeVehicle = {
    value: string;
    label: string;
    readiness: VehicleReadiness;
    /** Its insurance or road papers run out before the return: the handover would refuse it until they are renewed (TD-B264). */
    papersLapse?: boolean;
    /** The group it belongs to; a car of another group is an upgrade or a re-priced booking (D198). */
    groupName: string;
    sameGroup: boolean;
};
