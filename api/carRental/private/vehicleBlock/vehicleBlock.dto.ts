import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {VehicleSimple} from "../../../../dto/vehicle.dto";
import type {VEHICLE_BLOCK_REASONS} from "./vehicleBlock.schema-def";

export type VehicleBlock = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    vehicle?: VehicleSimple;
    startAt: string;
    endAt: string;
    reason: (typeof VEHICLE_BLOCK_REASONS)[number];
    note?: string;
};
