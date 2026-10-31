import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {VehicleCategorySimple} from "../../../../dto/vehicleCategory.dto";
import type {RentalLocationSimple} from "../../../../dto/rentalLocation.dto";
import type {RENTAL_SUBSCRIPTION_PERIODS, RENTAL_SUBSCRIPTION_STATUSS} from "./rentalSubscription.schema-def";

export type RentalSubscription = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    contactName: string;
    email: string;
    phone: string;
    category?: VehicleCategorySimple;
    pickupLocation?: RentalLocationSimple;
    businessAccount?: string;
    period: (typeof RENTAL_SUBSCRIPTION_PERIODS)[number];
    price: number;
    status: (typeof RENTAL_SUBSCRIPTION_STATUSS)[number];
    nextRunAt: string;
};
