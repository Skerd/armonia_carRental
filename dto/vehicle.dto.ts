import type {VehicleReadiness} from "../api/carRental/private/vehicle/vehicle.schema-def";

export type VehicleSimple = {
    _id: string;
    make: string;
    model: string;
    plate: string;
    /** Whether the car can go out. The counter reads this off the booking's car. */
    readiness: VehicleReadiness;
};
