import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {EffectiveRates} from "../../../../helpers/vehicleRates";
import type {VEHICLE_FUEL_TYPES, VEHICLE_MILEAGE_POLICIES, VEHICLE_TRANSMISSIONS} from "./vehicleCategory.schema-def";

export type VehicleCategory = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    images?: Media[];
    videos?: Media[];
    seats: number;
    doors?: number;
    luggage?: number;
    transmission: (typeof VEHICLE_TRANSMISSIONS)[number];
    fuelType: (typeof VEHICLE_FUEL_TYPES)[number];
    features: string[];
    dailyRate: number;
    weekendDailyRate?: number;
    weeklyRate?: number;
    /** `currency` is the class's, repeated on each season for display. */
    rateSeasons: {startDate: string; endDate: string; dailyRate: number; currency?: CurrencySimple}[];
    depositAmount?: number;
    mileagePolicy: (typeof VEHICLE_MILEAGE_POLICIES)[number];
    includedKmPerDay?: number;
    extraKmPrice?: number;
    minDriverAge?: number;
    crossBorderAllowed: boolean;
    crossBorderFee?: number;
    isPublic: boolean;
    /** Booked as a class ("or similar"); off when the group is only a heading for cars rented on their own (D198). */
    soldAsClass: boolean;
    /** Set when the platform hid the class after a report (D191): gone from the portal and the rental site. */
    hiddenByPlatform: boolean;
    sortOrder: number;
    /** The rental currency its amounts are in, added by the route (UX-07). */
    currency?: CurrencySimple;
};

/** One car of a category in its "Car prices" dialog (D198). */
export type CategoryCarPrice = {
    _id: string;
    title: string;
    plate: string;
    year?: number;
    status: string;
    listedAlone: boolean;
    /** Its own day price and deposit, when it has them. */
    dailyRate?: number;
    depositAmount?: number;
    /** It also has its own weekend, week or season prices, kept with its own day price. */
    hasOtherOwnPrices: boolean;
    rates: EffectiveRates;
};

export type CategoryCarPricesResponse = {
    data: {
        currency?: CurrencySimple;
        categoryDailyRate: number;
        categoryDepositAmount?: number;
        cars: CategoryCarPrice[];
    };
};

