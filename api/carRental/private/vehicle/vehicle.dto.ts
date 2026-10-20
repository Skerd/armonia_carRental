import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {VehicleCategorySimple} from "../../../../dto/vehicleCategory.dto";
import type {RentalLocationSimple} from "../../../../dto/rentalLocation.dto";
import type {VehicleStatus} from "./vehicle.schema-def";

export type Vehicle = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    category?: VehicleCategorySimple;
    make: string;
    model: string;
    year?: number;
    plate: string;
    vin?: string;
    color?: string;
    homeLocation?: RentalLocationSimple;
    status: VehicleStatus;
    odometerKm?: number;
    notes?: string;
};
