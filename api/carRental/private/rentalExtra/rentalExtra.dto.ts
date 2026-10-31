import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {RentalExtraKind, RentalExtraPricing} from "./rentalExtra.schema-def";

export type RentalExtra = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    kind: RentalExtraKind;
    description?: string;
    pricing: RentalExtraPricing;
    price: number;
    maxQuantity: number;
    excessAmount?: number;
    depositAmount?: number;
    isActive: boolean;
    sortOrder: number;
};
