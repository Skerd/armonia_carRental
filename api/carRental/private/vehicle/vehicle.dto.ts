import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {VehicleCategorySimple} from "../../../../dto/vehicleCategory.dto";
import type {RentalLocationSimple} from "../../../../dto/rentalLocation.dto";
import type {RentalReservation} from "../rentalReservation/rentalReservation.dto";
import type {VehicleBlock} from "../vehicleBlock/vehicleBlock.dto";
import type {VehicleDamage} from "../vehicleDamage/vehicleDamage.dto";
import type {VehicleDocument} from "../vehicleDocument/vehicleDocument.dto";
import type {VehicleFine} from "../vehicleFine/vehicleFine.dto";
import type {VehicleInsurance} from "../vehicleInsurance/vehicleInsurance.dto";
import type {VehicleMaintenance} from "../vehicleMaintenance/vehicleMaintenance.dto";
import type {VehicleReadiness, VehicleStatus} from "./vehicle.schema-def";

export type Vehicle = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    category?: VehicleCategorySimple;
    make: string;
    model: string;
    year?: number;
    plate: string;
    vin?: string;
    color?: string;
    homeLocation?: RentalLocationSimple;
    currentLocation?: RentalLocationSimple;
    readiness: VehicleReadiness;
    status: VehicleStatus;
    odometerKm?: number;
    notes?: string;
    images?: Media[];
    videos?: Media[];
    acquiredAt?: string;
    purchasePrice?: number;
    trackerId?: string;
    lastLatitude?: number;
    lastLongitude?: number;
    lastReportedAt?: string;
    /** From the latest completed service record; never written by a form. */
    nextServiceDueAt?: string;
    nextServiceDueKm?: number;
    /** The rental currency its amounts are in, added by the route (UX-07). */
    currency?: CurrencySimple;
    /**
     * The car's records, newest first, on its single read only (vehicle hub); each list is absent when the caller's
     * role cannot read that kind of record.
     */
    reservations?: RentalReservation[];
    damages?: VehicleDamage[];
    maintenance?: VehicleMaintenance[];
    documents?: VehicleDocument[];
    insurances?: VehicleInsurance[];
    fines?: VehicleFine[];
    blocks?: VehicleBlock[];
};

export type SetVehicleReadinessResult = {
    readiness: VehicleReadiness;
};
