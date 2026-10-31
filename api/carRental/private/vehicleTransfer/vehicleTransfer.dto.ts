import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {VehicleSimple} from "../../../../dto/vehicle.dto";
import type {RentalLocationSimple} from "../../../../dto/rentalLocation.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {VEHICLE_TRANSFER_STATUSS} from "./vehicleTransfer.schema-def";

export type VehicleTransfer = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    vehicle?: VehicleSimple;
    fromLocation?: RentalLocationSimple;
    toLocation?: RentalLocationSimple;
    departAt: string;
    arriveAt: string;
    driver?: SimpleBlankUser;
    status?: (typeof VEHICLE_TRANSFER_STATUSS)[number];
    odometerKm?: number;
    notes?: string;
};
