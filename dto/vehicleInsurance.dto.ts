import type {VEHICLE_INSURANCE_COVERAGES, VEHICLE_INSURANCE_STATUSES} from "../api/carRental/private/vehicleInsurance/vehicleInsurance.schema-def";

export type VehicleInsuranceSimple = {
    _id: string;
    insurer: string;
    policyNumber: string;
    coverage: (typeof VEHICLE_INSURANCE_COVERAGES)[number];
    status: (typeof VEHICLE_INSURANCE_STATUSES)[number];
};
