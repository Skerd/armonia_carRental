import type {VEHICLE_DAMAGE_AREAS, VEHICLE_DAMAGE_SEVERITIES, VEHICLE_DAMAGE_STATUSES} from "../api/carRental/private/vehicleDamage/vehicleDamage.schema-def";

export type VehicleDamageSimple = {
    _id: string;
    area: (typeof VEHICLE_DAMAGE_AREAS)[number];
    severity: (typeof VEHICLE_DAMAGE_SEVERITIES)[number];
    status: (typeof VEHICLE_DAMAGE_STATUSES)[number];
    description: string;
};
