import type {VEHICLE_MAINTENANCE_STATUSES, VEHICLE_MAINTENANCE_TYPES} from "../api/carRental/private/vehicleMaintenance/vehicleMaintenance.schema-def";

export type VehicleMaintenanceSimple = {
    _id: string;
    type: (typeof VEHICLE_MAINTENANCE_TYPES)[number];
    status: (typeof VEHICLE_MAINTENANCE_STATUSES)[number];
    provider?: string;
    cost?: number;
};
