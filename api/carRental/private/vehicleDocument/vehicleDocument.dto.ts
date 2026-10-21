import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {VehicleSimple} from "../../../../dto/vehicle.dto";
import type {VEHICLE_DOCUMENT_STATUSES, VEHICLE_DOCUMENT_TYPES} from "./vehicleDocument.schema-def";

export type VehicleDocument = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    vehicle?: VehicleSimple;
    type: (typeof VEHICLE_DOCUMENT_TYPES)[number];
    documentNumber?: string;
    issuer?: string;
    issuedAt?: string;
    expiresAt?: string;
    status: (typeof VEHICLE_DOCUMENT_STATUSES)[number];
    attachments?: Media[];
    notes?: string;
};
