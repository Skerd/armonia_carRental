import type {VEHICLE_TRANSFER_STATUSS} from "../api/carRental/private/vehicleTransfer/vehicleTransfer.schema-def";

export type VehicleTransferSimple = {
    _id: string;
    status: (typeof VEHICLE_TRANSFER_STATUSS)[number];
    departAt: string;
};
