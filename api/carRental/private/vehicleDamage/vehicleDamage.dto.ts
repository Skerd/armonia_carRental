import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {VehicleSimple} from "../../../../dto/vehicle.dto";
import type {RentalReservationSimple} from "../../../../dto/rentalReservation.dto";
import type {VEHICLE_DAMAGE_AREAS, VEHICLE_DAMAGE_SEVERITIES, VEHICLE_DAMAGE_STATUSES} from "./vehicleDamage.schema-def";

export type VehicleDamage = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    vehicle?: VehicleSimple;
    reservation?: RentalReservationSimple;
    reportedAt: string;
    area: (typeof VEHICLE_DAMAGE_AREAS)[number];
    severity: (typeof VEHICLE_DAMAGE_SEVERITIES)[number];
    description: string;
    photos?: Media[];
    status: (typeof VEHICLE_DAMAGE_STATUSES)[number];
    estimatedCost?: number;
    repairCost?: number;
    repairedAt?: string;
};
