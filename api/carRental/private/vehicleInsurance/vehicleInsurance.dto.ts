import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {VehicleSimple} from "../../../../dto/vehicle.dto";
import type {VEHICLE_INSURANCE_COVERAGES, VEHICLE_INSURANCE_STATUSES} from "./vehicleInsurance.schema-def";

export type VehicleInsurance = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    vehicle?: VehicleSimple;
    insurer: string;
    policyNumber: string;
    coverage: (typeof VEHICLE_INSURANCE_COVERAGES)[number];
    validFrom: string;
    expiresAt: string;
    premium?: number;
    deductible?: number;
    status: (typeof VEHICLE_INSURANCE_STATUSES)[number];
    attachments?: Media[];
    notes?: string;
};
