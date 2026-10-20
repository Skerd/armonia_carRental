import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {RentalExtraPricing} from "./rentalExtra.schema-def";

export type RentalExtra = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    description?: string;
    pricing: RentalExtraPricing;
    price: number;
    maxQuantity: number;
    isActive: boolean;
    sortOrder: number;
};
