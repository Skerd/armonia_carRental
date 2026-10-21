import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {VehicleSimple} from "../../../../dto/vehicle.dto";
import type {VEHICLE_MAINTENANCE_STATUSES, VEHICLE_MAINTENANCE_TYPES} from "./vehicleMaintenance.schema-def";

export type VehicleMaintenance = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    vehicle?: VehicleSimple;
    type: (typeof VEHICLE_MAINTENANCE_TYPES)[number];
    status: (typeof VEHICLE_MAINTENANCE_STATUSES)[number];
    serviceDate: string;
    odometerKm?: number;
    provider?: string;
    cost?: number;
    description?: string;
    nextDueAt?: string;
    nextDueKm?: number;
    attachments?: Media[];
};
