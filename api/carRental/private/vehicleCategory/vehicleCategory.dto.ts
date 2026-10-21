import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
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
    rateSeasons: {startDate: string; endDate: string; dailyRate: number}[];
    depositAmount?: number;
    mileagePolicy: (typeof VEHICLE_MILEAGE_POLICIES)[number];
    includedKmPerDay?: number;
    extraKmPrice?: number;
    minDriverAge?: number;
    isPublic: boolean;
    sortOrder: number;
};
