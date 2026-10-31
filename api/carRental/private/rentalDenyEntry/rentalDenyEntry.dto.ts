import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type RentalDenyEntry = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    email?: string;
    licenseNumber?: string;
    reason: string;
    isActive: boolean;
};
