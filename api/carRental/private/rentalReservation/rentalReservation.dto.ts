import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {VehicleCategorySimple} from "../../../../dto/vehicleCategory.dto";
import type {VehicleSimple} from "../../../../dto/vehicle.dto";
import type {RentalLocationSimple} from "../../../../dto/rentalLocation.dto";
import type {RentalExtraSimple} from "../../../../dto/rentalExtra.dto";
import type {RentalExtraPricing} from "../rentalExtra/rentalExtra.schema-def";
import type {
    RENTAL_CANCELLED_BY,
    RENTAL_FUEL_LEVELS,
    RENTAL_RESERVATION_SOURCES,
    RentalPaymentChoice,
    RentalPaymentStatus,
    RentalPriceLineKind,
    RentalReservationStatus,
    RentalTimelineEvent,
} from "./rentalReservation.constants";

export type RentalPriceLine = {
    label: string;
    kind: RentalPriceLineKind;
    quantity: number;
    unitPrice: number;
    total: number;
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

export type RentalReservation = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    number: string;
    status: RentalReservationStatus;
    source: (typeof RENTAL_RESERVATION_SOURCES)[number];
    category?: VehicleCategorySimple;
    vehicle?: VehicleSimple;
    pickupLocation?: RentalLocationSimple;
    returnLocation?: RentalLocationSimple;
    pickupAt: string;
    returnAt: string;
    holdExpiresAt?: string;
    customer?: SimpleBlankUser;
    contact: RentalContact;
    extras: {extra?: RentalExtraSimple; name: string; pricing: RentalExtraPricing; unitPrice: number; quantity: number; total: number}[];
    pricing: RentalPricing;
    snapshot: {
        categoryName: string;
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
    handover?: {at: string; by?: SimpleBlankUser; odometerKm: number; fuelLevel: (typeof RENTAL_FUEL_LEVELS)[number]; notes?: string};
    returnInfo?: {at: string; by?: SimpleBlankUser; odometerKm: number; fuelLevel: (typeof RENTAL_FUEL_LEVELS)[number]; notes?: string; damageNoted: boolean};
    timeline: {event: RentalTimelineEvent; at: string; note?: string}[];
    cancelledAt?: string;
    cancelledBy?: (typeof RENTAL_CANCELLED_BY)[number];
    cancellationReason?: string;
};
