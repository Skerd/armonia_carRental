import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {VehicleCategorySimple} from "../../../../dto/vehicleCategory.dto";
import type {RENTAL_PROMO_CODE_TYPES} from "./rentalPromoCode.schema-def";

export type RentalPromoCode = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    code: string;
    type: (typeof RENTAL_PROMO_CODE_TYPES)[number];
    value: number;
    category?: VehicleCategorySimple;
    bookableFrom?: string;
    bookableUntil?: string;
    tripFrom?: string;
    tripUntil?: string;
    minRentalDays?: number;
    usageLimit?: number;
    usageLimitPerEmail?: number;
    usageCount?: number;
    isActive: boolean;
    description?: string;
};
