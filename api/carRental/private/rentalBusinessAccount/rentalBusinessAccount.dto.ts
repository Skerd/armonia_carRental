import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type RentalBusinessAccount = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    vatNumber: string;
    billingEmail: string;
    address?: string;
    discountPercent?: number;
    paymentTermsDays?: number;
    isActive: boolean;
    notes?: string;
};
